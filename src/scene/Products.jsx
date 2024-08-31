import { useRef, useEffect, useMemo, useState } from 'react'
import { events, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, useGLTF, Float, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import useProduct from "../stores/useProduct"

export default function Products({rotating})
{
    const groupRef = useRef()

    const product = useProduct((state) => state.product);

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

    //1liter
    const model1Liter = useGLTF('./models/olive1l.glb').scene
    const model1LiterGeometry = model1Liter.children[0].geometry

    const modelLiterFrontLabel = useGLTF('./models/olive1lFrontLabel.glb').scene
    const literFrontLabelGeometry = modelLiterFrontLabel.children[0].geometry

    const literFrontTexture = useTexture("./textures/1l-front.jpg")
    literFrontTexture.flipY = false
    literFrontTexture.colorSpace = THREE.SRGBColorSpace

    const modelLiterBackLabel = useGLTF('./models/olive1lBackLabel.glb').scene
    const literBackLabelGeometry = modelLiterBackLabel.children[0].geometry

    const literBackTexture = useTexture("./textures/1l-back.jpg")
    literBackTexture.flipY = false
    literBackTexture.colorSpace = THREE.SRGBColorSpace

    const literCup = useGLTF("./models/olive1lCup.glb").scene
    const literCupGeometry = literCup.children[0].geometry



    //5l mar
    const mar5Liter = useGLTF("./models/5l-mar.glb").scene
    const mar5LiterGeometry = mar5Liter.children[0].geometry
    
    const mar5LiterCup = useGLTF("./models/5l-mar-cup.glb").scene
    const mar5LiterCupGeometry = mar5LiterCup.children[0].geometry

    const mar5LiterLabel = useGLTF("./models/5l-mar-label.glb").scene
    const mar5LiterLabelGeometry = mar5LiterLabel.children[0].geometry

    const olive5lTexture = useTexture("./textures/5l.jpg")
    olive5lTexture.colorSpace = THREE.SRGBColorSpace
    olive5lTexture.flipY = false

    // 750ml

    const olive750ml = useGLTF("./models/750ml.glb").scene
    const olive750mlGeometry = olive750ml.children[0].geometry

    const olive750mlLabel = useGLTF("./models/750ml-label.glb").scene
    const olive750mlLabelGeometry = olive750mlLabel.children[0].geometry

    const olive750mlCup = useGLTF("./models/750ml-cup.glb").scene
    const olive750mlCupGeometry = olive750mlCup.children[0].geometry
    
    const olive750Texture = useTexture("./textures/750ml-front.jpg")
    olive750Texture.colorSpace = THREE.SRGBColorSpace
    olive750Texture.flipY = false

    // 1l tin

    const olive1lTin = useGLTF("./models/tin.glb").scene
    const olive1lTinGeometry = olive1lTin.children[0].geometry

    const olive1lTinMetal = useGLTF("./models/tin-metal.glb").scene
    const olive1lTinMetalGeometry = olive1lTinMetal.children[0].geometry

    const olive1lTinPlastic = useGLTF("./models/tin-plastic.glb").scene
    const olive1lTinPlasticGeometry = olive1lTinPlastic.children[0].geometry

    const olive1lTinTexture = useTexture("./textures/1l-tin.jpg")
    olive1lTinTexture.colorSpace = THREE.SRGBColorSpace
    olive1lTinTexture.flipY = false

    useFrame((state, delta)=>{
        if(rotating){
            groupRef.current.rotation.y += delta
        }
    })


    return <>
    <group ref={groupRef}>
        <Float rotationIntensity={0} speed={0.8} floatIntensity={0.5} floatingRange={[-0.1, 0.1]} >

        {/* 5l-tin */}
        {product == '5literTin' ? 
        <group visible={product == '5literTin'}>
            <mesh scale={2} geometry={modelGeometry} >
                <meshStandardMaterial roughness={0.3} map={baseColorTexture} />
            </mesh>
            <mesh scale={2} geometry={modelMetallGeometry} >
                <meshStandardMaterial roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh scale={2} geometry={modelPlasticGeometry} >
                <meshStandardMaterial color={"#E70126"} roughness={0.5} metalness={0} />
            </mesh>
        </group>: ''}

        {/* 1l */}
        {product == 'liter' ? 
        <group visible={product == 'liter'} rotation-y={Math.PI / 2}>
            <mesh scale={2} geometry={model1LiterGeometry} >
                <MeshTransmissionMaterial color="#5F8D3A" roughness={0.2}  transmission={0.8} thickness={0.1} />
            </mesh>
            <mesh scale={2} geometry={literFrontLabelGeometry} >
                <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={literFrontTexture} />
            </mesh>
            <mesh scale={2} geometry={literBackLabelGeometry} >
                <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={literBackTexture} />
            </mesh>
            <mesh scale={2} geometry={literCupGeometry} >
                <meshStandardMaterial roughness={0.5} metalness={0.93} color="#E7CE1E" />
            </mesh>
        </group>
        : ''}

        {/* 1l-tin */}
        {product == '1lterTin' ? 
        <group visible={product == '1lterTin'} >
            <mesh scale={2} geometry={olive1lTinGeometry} >
                <meshStandardMaterial roughness={0.3} map={olive1lTinTexture} />
            </mesh>
            <mesh scale={2} geometry={olive1lTinMetalGeometry} >
                <meshStandardMaterial roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh scale={2} geometry={olive1lTinPlasticGeometry} >
                <meshStandardMaterial color={"#E70126"} roughness={0.5} metalness={0} />
            </mesh>
        </group>
        : ''}

        {/* 750ml */}
        {product == '750ml' ? 
        <group visible={product == '750ml'} rotation-y={-Math.PI / 2}>
            <mesh scale={2} geometry={olive750mlGeometry} >
                <MeshTransmissionMaterial color="#5F8D3A" roughness={0.2}  transmission={0.8} thickness={0.1} />
            </mesh>
            <mesh scale={2} geometry={olive750mlLabelGeometry} >
                <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={olive750Texture} />
            </mesh>
            <mesh scale={2} geometry={olive750mlCupGeometry} >
                <meshStandardMaterial color="#4B6050" roughness={0.3} />
            </mesh>
        </group>
        : ''}

        {/* 5l */}
        {product == '5l' ? 
        <group visible={product == '5l'} rotation-y={-Math.PI / 2}>
            <mesh scale={2} geometry={mar5LiterGeometry} >
                <MeshTransmissionMaterial 
                    color="#FFD884" 
                    roughness={0.2} 
                    thickness={3} 
                    transmission={0.9}
                    ior={0.5} 
                    clearcoat={10} 
                />
            </mesh>
            <mesh scale={2} geometry={mar5LiterLabelGeometry} >
                <meshStandardMaterial side={THREE.DoubleSide} roughness={0.3} map={olive5lTexture} />
            </mesh>
            <mesh scale={2} geometry={mar5LiterCupGeometry} >
                <meshStandardMaterial color="#111111" roughness={0.3} />
            </mesh>
        </group>
        : ''}

        </Float>
    </group>
        {/* <ContactShadows position={[0, -0.5, 0]} opacity={0.8} scale={10} blur={1.5} far={0.8} /> */}
    </>
}