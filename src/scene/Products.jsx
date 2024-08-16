import { useRef, useEffect, useMemo } from 'react'
import { events, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, useGLTF, Float, ContactShadows } from '@react-three/drei'

export default function Products()
{
    const model = useGLTF('./models/5l-tin.glb').scene
    const modelGeometry = model.children[0].geometry
    const modelMetall = useGLTF('./models/5l-tin-metall.glb').scene
    const modelMetallGeometry = modelMetall.children[0].geometry
    const modelPlastic = useGLTF('./models/5l-tin-plastic.glb').scene
    const modelPlasticGeometry = modelPlastic.children[0].geometry

    const baseColorTexture = useTexture("./textures/5l-tin.jpg")
    baseColorTexture.flipY = false
    baseColorTexture.wrapS = THREE.RepeatWrapping;
    baseColorTexture.wrapT = THREE.RepeatWrapping;
    // const normalTexture = useTexture("./textures/mountainNormal.png")

    return <>
        <Float rotationIntensity={0} speed={0.8} floatIntensity={0.5} floatingRange={[-0.1, 0.1]} >
            <mesh scale={2} geometry={modelGeometry} >
                <meshStandardMaterial roughness={0.3} map={baseColorTexture} />
            </mesh>
            <mesh scale={2} geometry={modelMetallGeometry} >
                <meshStandardMaterial roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh scale={2} geometry={modelPlasticGeometry} >
                <meshStandardMaterial color={"#E70126"} roughness={0.5} metalness={0} />
            </mesh>
        </Float>
        <ContactShadows position={[0, -0.4, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
    </>
}