import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useEffect, useMemo, useState } from 'react'
import { OrbitControls, Float, Environment, Lightformer } from '@react-three/drei'
import Olive from './Olive'

export default function HeroScene()
{
    return <>
    <Canvas
        dpr={0.8} //pixelRatio
        gl={{ 
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
            alpha: true,
        }} // renderer
        
        camera={ {
            fov: 50,
            position: [ 0, 0.2, 1. ],
            near: 0.1,
            far: 100
        }}
    >
        <Float rotationIntensity={0.5} speed={0.8} floatIntensity={0.2} floatingRange={[-0.05, 0.05]} >
            <Olive />
        </Float>
        <Environment preset={'dawn'} background={false} blur={1} >
            <Lightformer intensity={.4} color="#E3FF74" rotation-x={Math.PI} position={[0, 0, 6]} scale={[10, 10, 1]} />   
            <Lightformer intensity={.3} color="#F5EFED" rotation-x={Math.PI / 2} position={[0, 5, 2]} scale={[10, 10, 1]} />
            <Lightformer intensity={0.3} color="#E3FF74" rotation-x={Math.PI / 2} position={[0, -4, -6]} scale={[10, 10, 1]} />   
            <Lightformer intensity={0.3} color="#F5EFED" rotation-y={Math.PI} position={[0, 8, -8]} scale={[10, 10, 1]} />
            <Lightformer intensity={0.10} color="#AAFF00" rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer intensity={0.10} color="#F5EFED" rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />   
        </Environment>
    </Canvas>
    </>
}