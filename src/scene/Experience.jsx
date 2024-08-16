import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Products from './Products'
import Lights from './Lights'
import Particles from './Particles'
import Points from './Points'

export default function Experience()
{

    return <>
    <Canvas
        dpr={1} //pixelRatio
        gl={{ 
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
            alpha: true,
        }} // renderer
        
        camera={ {
            fov: 50,
            position: [ 0, 0.5, 1.5 ],
            near: 0.1,
            far: 100
        }}
    >
        <OrbitControls
            target={ [ 0, 0, 0 ] }
            enablePan={ false }
            minDistance={ 0 }
            maxDistance={ 100 }
        />
        <Perf position="top-left" />
        <Lights />
        <Products />
        <Particles />
        <Points />
    </Canvas>
    </>
}