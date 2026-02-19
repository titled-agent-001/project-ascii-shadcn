"use client";

import { useEffect, useRef } from "react";
import type * as THREE from "three";

export interface Ascii3DRendererProps {
  width?: number;
  height?: number;
  charset?: string;
  geometry?: "torusknot" | "sphere" | "cube" | "torus" | "cylinder" | "horse";
  modelUrl?: string;
  modelScale?: number;
  color?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
  enableControls?: boolean;
  invert?: boolean;
}

export function Ascii3DRenderer({
  width = 500,
  height = 300,
  charset = " .:-+*=%@#",
  geometry = "torusknot",
  modelUrl,
  modelScale,
  color = "#ffffff",
  autoRotate = true,
  rotationSpeed = 1,
  enableControls = true,
  invert = false,
}: Ascii3DRendererProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animId: number | null = null;
    let renderer: any = null;
    let themeObserver: MutationObserver | null = null;

    // Dynamic import to avoid SSR issues with Three.js
    Promise.all([
      import("three"),
      import("three/examples/jsm/effects/AsciiEffect.js"),
      import("three/examples/jsm/controls/OrbitControls.js"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
    ]).then(([THREE, { AsciiEffect }, { OrbitControls }, { GLTFLoader }]) => {
      if (!el) return;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#000000");

      const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
      camera.position.z = 5;

      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);
      const point = new THREE.PointLight(0xffffff, 1.5, 100);
      point.position.set(10, 10, 10);
      scene.add(point);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(-5, 5, 5);
      scene.add(dir);

      let mesh: THREE.Object3D | null = null;
      let mixer: THREE.AnimationMixer | null = null;
      const clock = new THREE.Clock();

      const gltfUrl = modelUrl ?? (geometry === "horse" ? "/models/Horse.glb" : null);

      if (gltfUrl) {
        const loader = new GLTFLoader();
        loader.load(gltfUrl, (gltf: any) => {
          const model = gltf.scene;
          const scale = modelScale ?? (geometry === "horse" ? 0.02 : 1);
          model.scale.set(scale, scale, scale);
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          model.traverse((child: any) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) });
            }
          });
          scene.add(model);
          mesh = model;
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip: THREE.AnimationClip) => {
              mixer!.clipAction(clip).play();
            });
          }
        });
      } else {
        let geo: THREE.BufferGeometry;
        switch (geometry) {
          case "sphere": geo = new THREE.SphereGeometry(2, 32, 32); break;
          case "cube": geo = new THREE.BoxGeometry(2.5, 2.5, 2.5); break;
          case "torus": geo = new THREE.TorusGeometry(2, 0.6, 16, 100); break;
          case "cylinder": geo = new THREE.CylinderGeometry(1.5, 1.5, 3, 32); break;
          default: geo = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 16); break;
        }
        const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) });
        mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);
      }

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);

      const effect = new AsciiEffect(renderer, charset, { invert });
      effect.setSize(width, height);

      const computedStyle = getComputedStyle(document.body);
      effect.domElement.style.color = computedStyle.color;
      effect.domElement.style.backgroundColor = computedStyle.backgroundColor;
      effect.domElement.style.fontFamily = "Menlo, Consolas, 'Courier New', monospace";
      effect.domElement.style.fontSize = "10px";
      effect.domElement.style.lineHeight = "10px";
      effect.domElement.style.overflow = "hidden";
      el.appendChild(effect.domElement);

      let controls: any = null;
      if (enableControls) {
        controls = new OrbitControls(camera, effect.domElement);
        controls.enableDamping = true;
      }

      themeObserver = new MutationObserver(() => {
        const style = getComputedStyle(document.body);
        effect.domElement.style.color = style.color;
        effect.domElement.style.backgroundColor = style.backgroundColor;
      });
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) mixer.update(delta);
        if (autoRotate && mesh) mesh.rotation.y += 0.01 * rotationSpeed;
        controls?.update();
        effect.render(scene, camera);
      };
      animate();
    });

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      themeObserver?.disconnect();
      renderer?.dispose();
      if (el) el.innerHTML = "";
    };
  }, [width, height, charset, geometry, modelUrl, modelScale, color, autoRotate, rotationSpeed, enableControls, invert]);

  return <div ref={ref} style={{ width, height, overflow: "hidden" }} />;
}
