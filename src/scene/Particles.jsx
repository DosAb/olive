import { useRef, useEffect, useMemo } from 'react'
import { events, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, useGLTF, Float } from '@react-three/drei'

export default function Particles()
{
    const olive = useGLTF("./models/olive.glb")
    const oliveGeometry = olive.scene.children[0].geometry
    const oliveLeaf = useGLTF("./models/olive-leaf.glb")
    const oliveLeafGeometry = oliveLeaf.scene.children[0].geometry

    const oliveLeafTexture = useTexture("./textures/olive-leaf.png")
    oliveLeafTexture.flipY = false

    return <>
    <Float >
        <mesh 
            position={[-0.6, 0, .3]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI} 
            scale={2} 
            geometry={oliveGeometry} 
        >
            <meshStandardMaterial roughness={0.3} color={"#90A955"} />
        </mesh>
    </Float>
    <Float>
        <mesh 
            position={[0.6, 0, .3]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI} 
            scale={2} 
            geometry={oliveGeometry} 
        >
            <meshStandardMaterial roughness={0.3} color={"#90A955"} />
        </mesh>
    </Float>
    <Float>
        <mesh 
            position={[-0.6, 0.4, .0]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI} 
            scale={2} 
            geometry={oliveGeometry} 
        >
            <meshStandardMaterial roughness={0.3} color={"#D1C060"} />
        </mesh>
    </Float>
    <Float>
        <mesh 
            position={[0.6, 0.4, .1]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI} 
            scale={2} 
            geometry={oliveGeometry} 
        >
            <meshStandardMaterial roughness={0.3} color={"#495440"} />
        </mesh>
    </Float>
    <Float>

        <mesh 
            position={[0.45, 0.3, -.3]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI} 
            scale={2} 
            geometry={oliveGeometry} 
        >
            <meshStandardMaterial roughness={0.3} color={"#495440"} />
        </mesh>
    </Float>
    <Float>
        <mesh 
            position={[-0.53, -0.4, -.45]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI} 
            scale={2} 
            geometry={oliveGeometry} 
        >
            <meshStandardMaterial roughness={0.3} color={"#495440"} />
        </mesh>
    </Float>

    {/* LEAFS */}

    <Float>
        <mesh 
            position={[-0.83, 0.2, -.15]} 
            rotation-x={Math.random() * Math.PI} 
            rotation-z={Math.random() * Math.PI} 
            rotation-y={Math.random() * Math.PI}
            scale={.1} 
            geometry={oliveLeafGeometry} 
        >
            <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={oliveLeafTexture} />
        </mesh>
    </Float>
    <Float>
        <mesh 
            position={[0.55, 0.2, -.45]} 
            rotation-x={-0.35} 
            rotation-z={.65} 
            rotation-y={0.75}
            scale={.1} 
            geometry={oliveLeafGeometry} 
        >
            <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={oliveLeafTexture} />
        </mesh>
    </Float>
    </>
}