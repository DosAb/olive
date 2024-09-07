import { Canvas } from '@react-three/fiber'
import gsap from 'gsap';
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import { useGSAP } from "@gsap/react";
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Scene from './Scene';
import { useRef } from 'react';


export default function Experience()
{
    
    return <>
    <Canvas
        dpr={0.7} //pixelRatio
        gl={{ 
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
            alpha: true,
        }} // renderer
        
        camera={ {
            fov: 50,
            position: [ 0, 0.2, 1.8 ],
            near: 0.1,
            far: 100
        }}
    >

        {/* <Perf position="top-left" /> */}
        <group position={[0, -0.05, 0]}>
            <Scene />
        </group>
    </Canvas>
    </>
}