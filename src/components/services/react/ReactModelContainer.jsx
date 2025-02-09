import { OrbitControls , Stage , PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ReactModel } from "./ReactModel";


const ReactModelContainer = () =>{
    return (
  <Canvas>
    <Suspense fallback="loading...">
        <Stage environment="night" instensity={8}>
        <ReactModel />
        </Stage>

  
    <OrbitControls enableZoom={false} autoRotate/>
    <PerspectiveCamera position={[-1,0,1]} zoom={0.8} makeDefault/>
    </Suspense>
  </Canvas>
    );
};

export default ReactModelContainer;