//card1.frag: fragment shader for the swiss cheese card.

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_LIGHT_SHADER

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;

void main() { 
	vec4 diffuse_color = vec4 (0.0, 1.0, 1.0, 1.0);
	float diffuse = clamp(dot (vertNormal, vertLightDir),0.0,1.0);
	gl_FragColor = vec4(diffuse * diffuse_color.rgb, .8);
	
	//your code here
	float spacing = .166;
	float radius = .1;
	
	for(float i = 0.0; i < 3.0; i++)	{
		for(float j = 0.0; j < 3.0; j++)	{
			vec3 center = vec3(spacing * 2.0 * i + spacing, spacing * 2.0 * j + spacing, 0.0);
			vec3 v3Coord = vec3(vertTexCoord.x, vertTexCoord.y, vertTexCoord.z);
			float euclidDist = sqrt(pow((center.x - v3Coord.x), 2) + pow((center.y - v3Coord.y), 2));
			
			if(euclidDist < radius)	{
				gl_FragColor = vec4(diffuse * diffuse_color.rgb, 0.0);
			}	  
		}
	}
}
