import { Canvas } from "@react-three/fiber"
import { Camera } from "three"
import { OrbitControls, useGLTF } from "@react-three/drei"


function App() {
  const { scene } = new useGLTF('');
  return (
    <>
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} style={{height: "100vh", width: "100vw"}}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls/>
      </Canvas>
    </>
  )
}

export default App
