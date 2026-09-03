"use client";

import { Suspense, useState, useSyncExternalStore, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

interface Model3D {
  kind: "can" | "pouch" | "bottle" | "jar";
  labelColor: string;
  capColor: string;
}

function checkWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

let cachedWebGL: boolean | null = null;
function getWebGLSnapshot() {
  if (cachedWebGL === null) cachedWebGL = checkWebGL();
  return cachedWebGL;
}
function getWebGLServerSnapshot() {
  return false;
}
function subscribeWebGL() {
  return () => {};
}

function ProductModel({ model, hovering }: { model: Model3D; hovering: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current && !hovering) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const dim = model.kind === "pouch" ? { r: 0.55, h: 1.6 } : model.kind === "bottle" ? { r: 0.35, h: 1.8 } : { r: 0.5, h: 1.5 };
  const capR = model.kind === "pouch" ? 0.6 : dim.r + 0.04;

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4} floatingRange={[-0.08, 0.08]}>
      <group ref={meshRef} position={[0, -0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[dim.r, dim.r, dim.h, 48]} />
          <meshStandardMaterial color="#181a1f" roughness={0.4} metalness={0.3} />
        </mesh>

        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[dim.r + 0.005, dim.r + 0.005, dim.h * 0.45, 48]} />
          <meshStandardMaterial color={model.labelColor} roughness={0.25} metalness={0.2} emissive={model.labelColor} emissiveIntensity={0.15} />
        </mesh>

        <mesh position={[0, dim.h / 2 + 0.12, 0]}>
          <cylinderGeometry args={[capR, capR, 0.22, 48]} />
          <meshStandardMaterial color={model.capColor} roughness={0.3} metalness={0.6} />
        </mesh>

        <mesh position={[0, dim.h / 2 + 0.24, 0]}>
          <cylinderGeometry args={[capR * 0.85, capR * 0.85, 0.04, 48]} />
          <meshStandardMaterial color={model.capColor} roughness={0.2} metalness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ model }: { model: Model3D }) {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-4, 4, -3]} intensity={0.4} color="#b4ff39" />
      <pointLight position={[0, -2, 3]} intensity={0.5} color="#ffffff" />
      <ProductModel model={model} hovering={hovering} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.6}
        onStart={() => setHovering(true)}
        onEnd={() => setHovering(false)}
      />
    </>
  );
}

export function ProductViewer({
  model,
  fallbackImage,
  className,
}: {
  model?: Model3D;
  fallbackImage: string;
  className?: string;
}) {
  const webglOk = useSyncExternalStore(subscribeWebGL, getWebGLSnapshot, getWebGLServerSnapshot);

  if (!model || !webglOk) {
    return (
      <div className={`relative ${className}`}>
        <Image src={fallbackImage} alt="Продукт" fill className="object-contain" sizes="(max-width:768px) 100vw, 50vw" priority />
      </div>
    );
  }

  return (
    <div className={`${className} cursor-grab active:cursor-grabbing`}>
      <Canvas camera={{ position: [0, 0.3, 3.2], fov: 40 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene model={model} />
        </Suspense>
      </Canvas>
    </div>
  );
}
