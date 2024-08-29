uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;
uniform sampler2D uTexture;

void main()
{
    float alpha = texture2D(uTexture, vUv).a;
    float strength = distance(vUv, vec2(0.5));

    gl_FragColor = vec4(uColor, alpha);
}