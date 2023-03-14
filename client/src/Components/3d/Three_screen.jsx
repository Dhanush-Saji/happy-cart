import { Suspense, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF} from '@react-three/drei'

import CanvasLoader from './Loader'
const ThreeScreen = () => {
    const groupRef = useRef()
    const headphone = useGLTF('./headphoneGLTF_pack/scene.gltf')
    useFrame(() => {
        groupRef.current.rotation.y += 0.005
      })
  return (
    <group ref={groupRef}>
    <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
        <primitive object={headphone.scene} scale={70} rotation={[0.2,0,-0.2]} />
    </mesh>
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </group>
  )
}
const HeadphoneCanvas = () =>{
    return(
        <Canvas shadows shadowMap={{ type: 'pcfsoft' }} camera={{ position: [0, 0, 50], fov: 25 }}
        gl={{preserveDrawingBuffer:true}}>
            <Suspense fallback={<CanvasLoader />}>
                <ThreeScreen />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default HeadphoneCanvas