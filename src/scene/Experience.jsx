import { Canvas } from '@react-three/fiber'
import gsap from 'gsap';
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import { useGSAP } from "@gsap/react";
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Products from './Products'
import Lights from './Lights'
import Particles from './Particles'
import { useRef } from 'react';


export default function Experience()
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
            position: [ 0, 0.2, 1.8 ],
            near: 0.1,
            far: 100
        }}
    >
        <OrbitControls
            target={ [ 0, 0, 0 ] }
            enablePan={ false }
            minDistance={ 0.7 }
            maxDistance={ 10 }
            enableZoom={ false }
        />
        {/* <Perf position="top-left" /> */}
        <group position={[0, -0.05, 0]}>
            <Lights />
            <Products />
            <Particles />
        </group>
    </Canvas>
    </>
}