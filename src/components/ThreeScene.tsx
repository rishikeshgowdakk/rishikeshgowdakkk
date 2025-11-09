'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AlertTriangle } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

interface ThreeSceneProps {
  dataUri: string;
}

export function ThreeScene({ dataUri }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current || !dataUri) return;

    setError(null);
    setLoading(true);

    const currentMount = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x7DF9FF, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0x6A0DAD, 3, 100);
    pointLight.position.set(-5, -5, -5);
    scene.add(pointLight);

    // Model Loader
    const loader = new GLTFLoader();

    try {
      const isBase64 = dataUri.includes(';base64,');
      if (!isBase64) {
        throw new Error('Invalid data URI: not a Base64 encoded string.');
      }
      
      const base64String = dataUri.split(';base64,')[1];
      const binaryString = atob(base64String);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const arrayBuffer = bytes.buffer;

      loader.parse(
        arrayBuffer,
        '',
        (gltf) => {
          const model = gltf.scene;
          
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov * (Math.PI / 180);
          let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
          cameraZ *= 1.5;

          camera.position.set(0, 0, cameraZ);
          controls.update();
          
          scene.add(model);
          setLoading(false);
        },
        (error) => {
          console.error('GLTF parsing error:', error);
          setError('Failed to parse 3D model data.');
          setLoading(false);
        }
      );
    } catch (e: any) {
      console.error('Data URI processing error:', e);
      setError(`Failed to process visualization data: ${e.message}`);
      setLoading(false);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [dataUri]);

  return (
    <div ref={mountRef} className="w-full h-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="w-full h-full" />
        </div>
      )}
      {error && !loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-destructive p-4">
          <AlertTriangle className="h-12 w-12 mb-4" />
          <p className="font-bold">Could not render visualization.</p>
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}
