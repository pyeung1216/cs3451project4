//card3.frag fragment shader for the duck card

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_TEXLIGHT_SHADER

// Set in Processing
uniform sampler2D texture;

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;


void main() { 
	vec4 diffuse_color = texture2D(texture, vertTexCoord.xy);
	float diffuse = clamp(dot (vertNormal, vertLightDir),0.0,1.0);
	gl_FragColor = vec4(diffuse * diffuse_color.rgb, 1.0);
  
  //your code here
  
	vec4 above = texture2D(texture, vec2(vertTexCoord.x, vertTexCoord.y - 1.0/250.0));
	vec4 below = texture2D(texture, vec2(vertTexCoord.x, vertTexCoord.y + 1.0/250.0));
    vec4 left = texture2D(texture, vec2(vertTexCoord.x - 1.0/250.0, vertTexCoord.y));
	vec4 right = texture2D(texture, vec2(vertTexCoord.x + 1.0/250.0, vertTexCoord.y));
	
	vec4 newColor = above + below + left + right - 4.0 * diffuse_color;
	float grayScale = (newColor.r * .2989 + newColor.g * .5870 + newColor.b * .1140) / 3.0;
	newColor.r = grayScale * 20;
	newColor.g = grayScale * 20;
	newColor.b = grayScale * 20;
	
	gl_FragColor = vec4(diffuse * newColor.rgb, 1);
}
