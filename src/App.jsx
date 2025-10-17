import { Canvas } from "@react-three/fiber"
import { Camera } from "three"
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei"
import { useEffect, useState } from "react";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedModel() {
  const group = useRef();
  const { scene, animations } = useGLTF("/sett.glb");


  // There’s only one animation clip in your case
  const clip = animations[0];

  // Create sub-clips (frame/time ranges depend on your model)
  const idleClip = THREE.AnimationUtils.subclip(clip, "Idle", 0, 48);   // frames 0-50
  const attackAndKickClip = THREE.AnimationUtils.subclip(clip, "AttackAndKick", 100, 265); // frames 51-100
  const grabClip  = THREE.AnimationUtils.subclip(clip, "Grab", 295, 382); // frames 101-160
  const wideRangeAttackClip  = THREE.AnimationUtils.subclip(clip, "WideRangeAttack", 383, 570); // frames 101-160
  const avoidClip  = THREE.AnimationUtils.subclip(clip, "Avoid", 655, 696); // frames 101-160
  const simpleAttackClip  = THREE.AnimationUtils.subclip(clip, "SimpleAttack", 697, 755); // frames 101-160
  const diedClip  = THREE.AnimationUtils.subclip(clip, "Died", 750, 885); // frames 101-160
  const walkClip  = THREE.AnimationUtils.subclip(clip, "Walk", 890, 932); // frames 101-160
  const doubleAttackClip  = THREE.AnimationUtils.subclip(clip, "DoubleAttack", 933, 1034); // frames 101-160
  const tailAttackClip  = THREE.AnimationUtils.subclip(clip, "TailAttack", 1035, 1113); // frames 101-160
  const earthQuakeAttackClip  = THREE.AnimationUtils.subclip(clip, "EarthQuakeAttack", 1113, 1403); // frames 101-160
  const swapAttackClip  = THREE.AnimationUtils.subclip(clip, "SwapAttack", 1570, 1648); // frames 101-160 Useless
  const curvyAttackClip  = THREE.AnimationUtils.subclip(clip, "CurvyAttack", 1649, 1780); // frames 101-160 Useless
  const ringAttackClip = THREE.AnimationUtils.subclip(clip, "RingAttack", 1770, 1839); // frames 101-160 Useless
  const rightArmAttackClip = THREE.AnimationUtils.subclip(clip, "RightArmAttack", 1910, 1984); // frames 101-160 Useless

  // hook to control animations
  const { actions } = useAnimations([idleClip, attackAndKickClip, grabClip, wideRangeAttackClip, avoidClip, simpleAttackClip, diedClip, walkClip, doubleAttackClip, tailAttackClip, earthQuakeAttackClip, swapAttackClip, curvyAttackClip, ringAttackClip, rightArmAttackClip], group);

  useEffect(() => {
    console.log("Available actions:", Object.keys(actions));

    // play one of the subclips
    // actions["Idle"]?.reset().play();

    // actions["AttackAndKick"]?.reset().play();

    // actions["Avoid"]?.reset().play();

    // actions["SimpleAttack"]?.reset().play();

    // actions["Died"]?.reset().play();

    // actions["Walk"]?.reset().play();

    // actions["DoubleAttack"]?.reset().play();

    // actions["TailAttack"]?.reset().play();

    // actions["EarthQuakeAttack"]?.reset().play();

    // actions["Do"]?.reset().play();

    // actions["CurvyAttack"]?.reset().play();

    // actions["RingAttack"]?.reset().play();

    actions["RightArmAttack"]?.reset().play();

    return () => actions["RightArmAttack"]?.stop();
  }, [actions]);

  return <primitive ref={group} object={scene} />;

}

function App() {

  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    console.log("Counter:", counter);
  }, [counter])
  
  console.log("Render App:", counter);
  
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increasing</button>
      <button onClick={() => setCounter(counter - 1)}>Decreasing</button>
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} style={{height: "100vh", width: "100vw"}}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedModel/>;
        <OrbitControls/>
      </Canvas>
    </>
  )
}

export default App
