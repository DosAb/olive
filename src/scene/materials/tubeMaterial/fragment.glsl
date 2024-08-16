uniform float uTime;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float dash = sin(uv.x * 10.0 - uTime);
    if(dash < 0.5) discard;
    gl_FragColor = vec4(1.0, 1.0, 1.0, dash);
}