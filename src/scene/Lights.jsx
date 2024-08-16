import { AccumulativeShadows, RandomizedLight, useGLTF, useTexture, Environment, Lightformer, Float } from '@react-three/drei'


export default function Lights()
{
    return <>
        <Environment preset={'dawn'} background={false} blur={1} >
            <Lightformer intensity={.4} color="#E3FF74" rotation-x={Math.PI} position={[0, 0, 6]} scale={[10, 10, 1]} />   
            <Lightformer intensity={.3} color="#F5EFED" rotation-x={Math.PI / 2} position={[0, 5, 2]} scale={[10, 10, 1]} />
            <Lightformer intensity={0.3} color="#E3FF74" rotation-x={Math.PI / 2} position={[0, -4, -6]} scale={[10, 10, 1]} />   
            <Lightformer intensity={0.3} color="#F5EFED" rotation-y={Math.PI} position={[0, 8, -8]} scale={[10, 10, 1]} />
            <Lightformer intensity={0.10} color="#AAFF00" rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer intensity={0.10} color="#F5EFED" rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />   
        </Environment>
    </>
}