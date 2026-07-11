import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

/* ============ The immersive solar system ============ */

function Sun() {
  const ref = useRef()
  const glowRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) ref.current.rotation.y = t * 0.05
    if (glowRef.current) {
      const s = 1 + Math.sin(t * 1.4) * 0.04
      glowRef.current.scale.setScalar(s * 2.3)
    }
  })

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshStandardMaterial
          color="#ffb45e"
          emissive="#ff8f3c"
          emissiveIntensity={2.2}
          roughness={0.4}
        />
      </mesh>
      {/* Soft glow shells */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#ff9d4d" transparent opacity={0.12} depthWrite={false} />
      </mesh>
      <mesh scale={1.6}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial color="#ffb45e" transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <pointLight intensity={40} distance={30} decay={2} color="#ffd9a0" />
    </group>
  )
}

function OrbitRing({ radius }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius))
    }
    return pts
  }, [radius])

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#8c98dc" transparent opacity={0.14} />
    </line>
  )
}

function Planet({ radius, size, speed, color, offset = 0, hasRing = false, hasMoon = false, emissive }) {
  const orbitRef = useRef()
  const planetRef = useRef()
  const moonRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (orbitRef.current) orbitRef.current.rotation.y = t * speed + offset
    if (planetRef.current) planetRef.current.rotation.y = t * 0.4
    if (moonRef.current) moonRef.current.rotation.y = t * 1.2
  })

  return (
    <group ref={orbitRef}>
      <group position={[radius, 0, 0]}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 40, 40]} />
          <meshStandardMaterial
            color={color}
            roughness={0.55}
            metalness={0.15}
            emissive={emissive || '#000000'}
            emissiveIntensity={emissive ? 0.35 : 0}
          />
        </mesh>

        {hasRing && (
          <mesh rotation={[Math.PI / 2.4, 0, 0]}>
            <ringGeometry args={[size * 1.45, size * 2.2, 64]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.35}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        )}

        {hasMoon && (
          <group ref={moonRef}>
            <mesh position={[size * 2.1, 0.1, 0]}>
              <sphereGeometry args={[size * 0.24, 24, 24]} />
              <meshStandardMaterial color="#c9cede" roughness={0.8} />
            </mesh>
          </group>
        )}
      </group>
    </group>
  )
}

function ShootingStar() {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() % 7) / 7 // one pass every 7s
    if (ref.current) {
      ref.current.position.set(-8 + t * 18, 4.5 - t * 3.2, -6)
      ref.current.material.opacity = t < 0.12 ? t / 0.12 : Math.max(0, 1 - (t - 0.12) / 0.45)
    }
  })
  return (
    <mesh ref={ref} rotation={[0, 0, -0.28]}>
      <planeGeometry args={[1.6, 0.015]} />
      <meshBasicMaterial color="#dfe6ff" transparent opacity={0} depthWrite={false} />
    </mesh>
  )
}

function Rig() {
  useFrame(({ camera, pointer, clock }) => {
    const t = clock.getElapsedTime()
    const targetX = Math.sin(t * 0.05) * 0.6 + pointer.x * 0.7
    const targetY = 2.6 + Math.cos(t * 0.04) * 0.25 + pointer.y * 0.45
    camera.position.x += (targetX - camera.position.x) * 0.025
    camera.position.y += (targetY - camera.position.y) * 0.025
    camera.lookAt(0, 0, 0)
  })
  return null
}

function System() {
  const tilt = useRef()
  useFrame(({ clock }) => {
    if (tilt.current) {
      tilt.current.rotation.z = 0.06 + Math.sin(clock.getElapsedTime() * 0.05) * 0.015
    }
  })

  return (
    <group ref={tilt} rotation={[0.12, 0, 0.06]}>
      <Sun />
      <OrbitRing radius={1.9} />
      <OrbitRing radius={2.8} />
      <OrbitRing radius={3.8} />
      <OrbitRing radius={5.0} />
      <OrbitRing radius={6.3} />

      <Planet radius={1.9} size={0.13} speed={0.32} color="#b8bdd4" offset={1.2} />
      <Planet radius={2.8} size={0.22} speed={0.21} color="#4fd1ff" emissive="#1a6d8f" offset={3.8} hasMoon />
      <Planet radius={3.8} size={0.18} speed={0.15} color="#ff7a59" emissive="#7a2c18" offset={5.4} />
      <Planet radius={5.0} size={0.34} speed={0.09} color="#e2b07a" offset={0.6} hasRing />
      <Planet radius={6.3} size={0.26} speed={0.06} color="#7c8cff" emissive="#2c3480" offset={2.4} />
    </group>
  )
}

export default function SolarSystem() {
  return (
    <div className="solar-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2.6, 7.6], fov: 48 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.12} />
          <Stars radius={60} depth={40} count={2600} factor={3.2} saturation={0} fade speed={0.6} />
          <Sparkles count={60} scale={14} size={1.6} speed={0.25} opacity={0.35} color="#aab4ff" />
          <System />
          <ShootingStar />
          <Rig />
        </Suspense>
      </Canvas>

      <style>{`
        .solar-scene {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .solar-scene canvas { pointer-events: none !important; }
      `}</style>
    </div>
  )
}
