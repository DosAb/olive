import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useMemo, useState } from 'react'

import Products from './Products'
import Lights from './Lights'
import Particles from './Particles'

export default function Scene()
{
    const mm = gsap.matchMedia()
    const groupRef = useRef()

    function setMatchMedia(){
        mm.add("(min-width: 1024px) and (max-width: 2048px)", () => {
            if(groupRef.current){
                groupRef.current.scale.setScalar(1)
            }
        })
        mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
            if(groupRef.current){
                groupRef.current.position.y = 0.25
                groupRef.current.scale.setScalar(0.7)
            }
        })
        mm.add("(min-width: 500px) and (max-width: 768px)", () => {
            if(groupRef.current){
                groupRef.current.position.y = 0.25
                groupRef.current.scale.setScalar(0.7)
            }
        })
        mm.add("(max-width: 500px)", () => {
            if(groupRef.current){
                groupRef.current.position.y = 0.25
                groupRef.current.scale.setScalar(0.55)
            }
        })
    }

    useGSAP(()=>{
        setMatchMedia()
    })

    return <>
        <group ref={groupRef}>
            <Lights />
            <Products />
            <Particles />
        </group>
    </>
}