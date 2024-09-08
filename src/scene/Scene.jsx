import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useMemo, useState } from 'react'
import { OrbitControls } from '@react-three/drei'

import Products from './Products'
import Lights from './Lights'
import Particles from './Particles'

export default function Scene()
{
    const mm = gsap.matchMedia()
    const groupRef = useRef()
    const [enableOrbitControls, setEnableOrbitControls] = useState(true)

    function setMatchMedia(){
        mm.add("(min-width: 1024px) and (max-width: 2048px)", () => {
            if(groupRef.current){
                groupRef.current.scale.setScalar(1)
            }
            setEnableOrbitControls(true)
        })
        mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
            if(groupRef.current){
                groupRef.current.position.y = 0.25
                groupRef.current.scale.setScalar(0.7)
            }
            setEnableOrbitControls(true)
        })
        mm.add("(min-width: 500px) and (max-width: 768px)", () => {
            if(groupRef.current){
                groupRef.current.position.y = 0.25
                groupRef.current.scale.setScalar(0.7)
            }
            setEnableOrbitControls(true)
        })
        mm.add("(max-width: 500px)", () => {
            if(groupRef.current){
                groupRef.current.position.y = 0.4
                groupRef.current.position.x = 0.
                groupRef.current.scale.setScalar(0.5)
            }
            setEnableOrbitControls(false)
        })
    }

    useGSAP(()=>{
        setMatchMedia()
    })

    return <>
        <OrbitControls
            enabled={enableOrbitControls}
            target={ [ 0, 0, 0 ] }
            enablePan={ false }
            minDistance={ 0.7 }
            maxDistance={ 10 }
            enableZoom={ false }
        />
        <group ref={groupRef}>
            <Lights />
            <Products rotating={!enableOrbitControls} />
            <Particles />
        </group>
    </>
}