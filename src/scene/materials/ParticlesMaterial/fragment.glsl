uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uTexture;
varying vec2 vUv;

varying float vDistance;

void main()
{
    float mask = texture2D(uTexture, gl_PointCoord).r;
    float strength = (1.0 - distance(gl_PointCoord, vec2(0.5)));
    // float alpha = 1.0 - (vDistance / 120.0);
    gl_FragColor = vec4(uColor1, (mask));
}