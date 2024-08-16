import { useRef, useEffect, useMemo } from 'react'
import { events, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, useGLTF } from '@react-three/drei'


export default function Mountain()
{
    const model = useGLTF('./models/mountain.glb').scene
    const modelGeometry = model.children[0].geometry

    const baseColorTexture = useTexture("./textures/mountainBaseColor.jpg")
    const normalTexture = useTexture("./textures/mountainNormal.png")

    return <>
        <mesh scale={0.2} geometry={modelGeometry} >
            <meshStandardMaterial map={baseColorTexture} normalMap={normalTexture} />
        </mesh>
    </>
}