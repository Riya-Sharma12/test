import { OrbitControls , Stage , PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CoderModel } from "./CoderModel";


const CoderModelContainer = () =>{
    return (
  <Canvas>
    <Suspense fallback="loading...">
        <Stage environment="forest" instensity={10}>
        <CoderModel />
        </Stage>

  
    <OrbitControls enableZoom={false} autoRotate/>
    <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
    </Suspense>
  </Canvas>
    );
};

export default CoderModelContainer;