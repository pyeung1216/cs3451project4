//card4.vert: vertex shader for the mountain card

// Our shader uses both processing's texture and light variables
#define PROCESSING_TEXLIGHT_SHADER

// Set automatically by Processing
uniform mat4 transform;
uniform mat3 normalMatrix;
uniform vec3 lightNormal;
uniform mat4 texMatrix;
uniform sampler2D texture;


// Come from the geometry/material of the object
attribute vec4 vertex;
attribute vec4 color;
attribute vec3 normal;
attribute vec2 texCoord;

// These values will be sent to the fragment shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;
varying vec4 vertTexCoordR;
varying vec4 vertTexCoordL;

void main() {
    vertColor = color;
    vertNormal = normalize(normalMatrix * normal);
    vec4 vert = vertex;
    vertLightDir = normalize(-lightNormal);
    vertTexCoord = texMatrix * vec4(texCoord, 1.0, 1.0);

	//your code here
	vec4 newColor = texture2D(texture, vertTexCoord.xy);
	float grayScale = (newColor.r * .2989 + newColor.g * .5870 + newColor.b * .1140) / 3.0;
	vert.xyz += normal * grayScale * 450;
	
	gl_Position = transform * vert;
}