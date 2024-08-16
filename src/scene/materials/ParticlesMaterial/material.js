import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'
import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('./textures/particleMask.png')
texture.flipY = false

const ParticlesMaterial = shaderMaterial(
    {
        colorTexture: null,
        uTime: 0,
        uColor1: new THREE.Color('#C1DD54'),
        uColor2: new THREE.Color('#F2F4F3'),
        uTexture: texture
    },
    vertexShader,
    fragmentShader
)

extend({ ParticlesMaterial })