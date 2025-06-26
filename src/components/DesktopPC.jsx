import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function DesktopPCModel(props) {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  return <primitive object={scene} {...props} />;
}

export const DesktopPC = () => {
  return (
    <div style={{ width: "100%", height: 320, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 32 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <DesktopPCModel scale={0.3} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf"); 