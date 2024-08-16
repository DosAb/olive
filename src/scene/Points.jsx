import { useTexture, useGLTF } from '@react-three/drei'
import { useThree, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import './materials/ParticlesMaterial/material.js'


export default function Points()
{
    const materialRef = useRef()

    const geometry = new THREE.BufferGeometry()
    const count = 100
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const velocity = new Float32Array(count)
    const distance = new Float32Array(count)


    for(let i = 0; i < count; i++)
    {
        let i3 = i * 3
        positions[i3 + 0] = (Math.random() - 0.5) * 10
        positions[i3 + 1] = (Math.random() - 0.5) * 8 - 4
        positions[i3 + 2] = (Math.random() - 0.5) * 20
        sizes[i] = 5 + Math.random() * 10
        velocity[i] = 0.4 + Math.random() * 0.6
        distance[i] = 0.6 + Math.random() * 0.4
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute('aVelocity', new THREE.BufferAttribute(velocity, 1))
    geometry.setAttribute('aDistance', new THREE.BufferAttribute(distance, 1))

    useFrame((state, delta)=>{
        materialRef.current.uniforms.uTime.value += delta * 3
    })


    return <>
        <points geometry={geometry} >
            <particlesMaterial ref={materialRef} depthWrite={false} blending={THREE.NormalBlending} transparent={true} />
        </points>
    </>
}
