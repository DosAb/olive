import { useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useEffect, useMemo, useState } from 'react'
import { useTexture, useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import "./planeMaterial/material"

export default function Olive()
{
    const groupRef = useRef()
    const mainRef = useRef()
    const mm = gsap.matchMedia()

    function setMatchMedia(){
        mm.add("(min-width: 1024px) and (max-width: 2048px)", () => {
            if(mainRef.current){
                mainRef.current.position.x = 0.4
            }
        })
        mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
            if(mainRef.current){
                mainRef.current.position.x = 0.2
                groupRef.current.scale.setScalar(1.1)
            }
        })
    }

    useGSAP(()=>{
        setMatchMedia()
    })

    const oliveModel = useGLTF('./models/olive1l.glb').scene
    const oliveGeometry = oliveModel.children[0].geometry

    const modelLiterFrontLabel = useGLTF('./models/olive1lFrontLabel.glb').scene
    const literFrontLabelGeometry = modelLiterFrontLabel.children[0].geometry

    const oliveTexture = useTexture('./textures/1l-front.jpg')

    const literFrontTexture = useTexture("./textures/1l-front.jpg")
    literFrontTexture.flipY = false
    literFrontTexture.colorSpace = THREE.SRGBColorSpace

    const blurTexture = useTexture("./imgs/heroBlur.png")

    const literCup = useGLTF("./models/olive1lCup.glb").scene
    const literCupGeometry = literCup.children[0].geometry

    const mouse = new THREE.Vector2(0, 0)

    window.addEventListener('mousemove', (event)=>{
        mouse.x = (event.clientX / window.innerWidth) * 2 -1
        mouse.y = -((event.clientY / window.innerHeight) * 2 -1)
    })

    useFrame((state, delta)=>{
        groupRef.current.position.x += (mouse.x * 0.1 - groupRef.current.position.x) / 30
        groupRef.current.position.y += (mouse.y * 0.05 - groupRef.current.position.y) / 50

        groupRef.current.rotation.y += (mouse.x * 0.5 - (groupRef.current.rotation.y - Math.PI / 2 + .3 )) / 40
    })

    const uniforms = {
        uTexture: {value: blurTexture},
        uColor: {value: new THREE.Color("#FFEE7A")}
    }

    return <>
    <group ref={mainRef} position={[0.4, -0.05, 0]} rotation-z={-0.25}>
        {/* <mesh>
            <planeGeometry />
            <planeMaterial transparent={true} uniforms={uniforms} />
        </mesh> */}
        <group ref={groupRef} scale={1.2} rotation-y={0}>
            <mesh onPointerEnter={()=>{console.log('enter')}} geometry={oliveGeometry} >
            <MeshTransmissionMaterial color="#61772C" roughness={0.2}  transmission={0.85} thickness={0.1} />
            </mesh>
            <mesh geometry={literFrontLabelGeometry} >
                <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={literFrontTexture} />
            </mesh>
            <mesh geometry={literCupGeometry} >
                <meshStandardMaterial roughness={0.5} metalness={0.93} color="#E7CE1E" />
            </mesh>
        </group>
    </group>
    </>
}