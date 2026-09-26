'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Particle Cloud (Electric blue & cyan dots)
    const particleCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const color1 = new THREE.Color('#2152FF'); // Royal Blue
    const color2 = new THREE.Color('#60A5FA'); // Light Blue
    const color3 = new THREE.Color('#BFDBFE'); // Pale blue

    // Deterministic pseudo-random sequence for particles
    let seed = 42;
    const lcg = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    for (let i = 0; i < particleCount; i++) {
      // Spread in a wide cylindrical volume
      positions[i * 3] = (lcg() - 0.5) * 35;
      positions[i * 3 + 1] = (lcg() - 0.5) * 25;
      positions[i * 3 + 2] = (lcg() - 0.5) * 20;

      const randVal = lcg();
      let mixedColor = color3;
      if (randVal > 0.6) {
        mixedColor = color2;
      } else if (randVal > 0.3) {
        mixedColor = color1;
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      scales[i] = lcg() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(33,82,255,0.8)');
      gradient.addColorStop(1, 'rgba(33,82,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    worldGroup.add(particles);

    // 2. Interactive Floating 3D Wireframe Polyhedron
    const polyGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const polyMat = new THREE.MeshStandardMaterial({
      color: 0x2152ff,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const polyMesh = new THREE.Mesh(polyGeo, polyMat);
    polyMesh.position.set(5.5, 1.8, -2);
    worldGroup.add(polyMesh);

    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    polyMesh.add(innerMesh);

    // 3. Floating 3D Rings / Torus Knot
    const ringGeo = new THREE.TorusGeometry(3.6, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x2152ff,
      transparent: true,
      opacity: 0.3,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    ring.position.set(5.5, 1.8, -2);
    worldGroup.add(ring);

    // 4. Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2152ff, 3, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 2, 40);
    blueLight.position.set(-10, -5, 5);
    scene.add(blueLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      worldGroup.rotation.y = mouseX * 0.4;
      worldGroup.rotation.x = -mouseY * 0.4;

      // Rotate polyhedron & ring
      polyMesh.rotation.x = elapsedTime * 0.35;
      polyMesh.rotation.y = elapsedTime * 0.45;
      innerMesh.rotation.x = -elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.3;

      ring.rotation.z = elapsedTime * 0.15;
      ring.rotation.y = Math.sin(elapsedTime * 0.5) * 0.2;

      // Slow particle rotation
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      polyGeo.dispose();
      polyMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
}
