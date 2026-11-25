"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Planeta 3D que rota solo: un hemisferio sano (océanos azules, bosques, hielo
 * polar, nubes blancas) y otro dañado (tierra quemada, grietas incandescentes,
 * incendios, mares con petróleo y humo). three.js se carga de forma diferida
 * para no penalizar la carga inicial de la página.
 */
export default function PlanetScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const s = await import("./shaders");
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        setFailed(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0, 4.6);

      const lightDir = new THREE.Vector3(-0.55, 0.35, 0.9).normalize();

      // Grupo inclinado como el eje terrestre (~23,4°)
      const tilt = new THREE.Group();
      tilt.rotation.z = THREE.MathUtils.degToRad(23.4);
      tilt.rotation.x = 0.18;
      scene.add(tilt);

      const spin = new THREE.Group();
      tilt.add(spin);

      const planetMat = new THREE.ShaderMaterial({
        vertexShader: s.planetVertex,
        fragmentShader: s.planetFragment,
        uniforms: { uTime: { value: 0 }, uLightDir: { value: lightDir } },
      });
      const planet = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 128), planetMat);
      spin.add(planet);

      const cloudMat = new THREE.ShaderMaterial({
        vertexShader: s.cloudVertex,
        fragmentShader: s.cloudFragment,
        uniforms: { uTime: { value: 0 }, uOffset: { value: 0 }, uLightDir: { value: lightDir } },
        transparent: true,
        depthWrite: false,
      });
      const clouds = new THREE.Mesh(new THREE.SphereGeometry(1.025, 96, 96), cloudMat);
      spin.add(clouds);

      const atmoMat = new THREE.ShaderMaterial({
        vertexShader: s.atmosphereVertex,
        fragmentShader: s.atmosphereFragment,
        side: THREE.BackSide,
        blending: THREE.NormalBlending,
        transparent: true,
        depthWrite: false,
      });
      const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.15, 64, 64), atmoMat);
      spin.add(atmosphere);

      // Campo de estrellas
      const starCount = 900;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        const r = 18 + Math.random() * 20;
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        starPos[i * 3] = r * Math.sin(ph) * Math.cos(th);
        starPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
        starPos[i * 3 + 2] = -Math.abs(r * Math.cos(ph));
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({ color: 0xdfe8ff, size: 0.07, transparent: true, opacity: 0.85 });
      const stars = new THREE.Points(starGeo, starMat);
      stars.visible = false; // fondo blanco: sin campo de estrellas
      scene.add(stars);

      const resize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        // En paneles estrechos (móvil) alejamos la cámara para dejar aire a la leyenda
        camera.position.z = camera.aspect < 1 ? 4.6 / Math.max(camera.aspect, 0.75) + 0.3 : 4.6;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(mount);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const speed = reduced ? 0.05 : 0.16; // rad/s

      let visible = true;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(mount);

      let last = performance.now();
      let t = 0;
      let angle = 0;
      let cloudOffset = 0;
      let raf = 0;

      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (!visible || document.hidden) return;
        t += dt;
        angle += dt * speed;
        cloudOffset += dt * speed * 0.18;
        spin.rotation.y = angle;
        clouds.rotation.y = cloudOffset;
        stars.rotation.y = angle * 0.04;
        planetMat.uniforms.uTime.value = t;
        cloudMat.uniforms.uTime.value = t;
        cloudMat.uniforms.uOffset.value = cloudOffset;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        [planet, clouds, atmosphere].forEach((m) => m.geometry.dispose());
        [planetMat, cloudMat, atmoMat, starMat].forEach((m) => m.dispose());
        starGeo.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })().catch(() => setFailed(true));

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="planet-canvas" ref={mountRef}>
      {failed && <div className="planet-fallback" aria-hidden="true" />}
    </div>
  );
}
