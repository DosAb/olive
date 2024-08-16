uniform sampler2D particleTexture;

varying vec2 vUv;

void main() {
    float maskStrength = texture2D(particleTexture, gl_PointCoord).r;

    gl_FragColor = vec4(vec3(1.0), maskStrength);
}