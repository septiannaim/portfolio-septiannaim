import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function PlanetModel(props) {
  const { scene } = useGLTF("/planet/scene.gltf");
  return <primitive object={scene} {...props} />;
}

export const Planet = () => {
  return (
    <div style={{ width: "100%", height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <PlanetModel scale={2.2} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

// Preload the GLTF model
useGLTF.preload("/planet/scene.gltf"); 