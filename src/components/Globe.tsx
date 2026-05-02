import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere args={[0.85, 64, 64]} ref={meshRef}>
      <meshStandardMaterial
        color="#c8ff00"
        wireframe
        transparent
        opacity={0.6}
        emissive="#c8ff00"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GlobeMesh />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
