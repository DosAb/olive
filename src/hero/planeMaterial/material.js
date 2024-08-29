import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'
import * as THREE from 'three'

const PlaneMaterial = shaderMaterial(
    {},
    vertexShader,
    fragmentShader
)

extend({ PlaneMaterial })