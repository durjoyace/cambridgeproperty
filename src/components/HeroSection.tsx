import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    // --- 1. Three.js Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // --- 2. 3D Object & Material (Torus Knot) ---
    const geometry = new THREE.TorusKnotGeometry(2.4, 0.8, 256, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.15,
      transmission: 0.95,
      thickness: 1.5,
      ior: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      iridescence: 1.0,
      iridescenceIOR: 1.3,
      iridescenceThicknessRange: [100, 400],
      transparent: true,
      opacity: 1,
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // --- 3. Lighting (3-Point Setup) ---
    const blueLight = new THREE.DirectionalLight(0x00d2ff, 4);
    blueLight.position.set(5, 5, 2);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x9d00ff, 8, 20);
    purpleLight.position.set(-5, -5, 2);
    scene.add(purpleLight);

    const rimLight = new THREE.DirectionalLight(0xcceeff, 1.5);
    rimLight.position.set(0, 5, -8);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // --- 4. Animation Loop & Camera Physics ---
    const clock = new THREE.Clock();
    let animationFrameId: number;
    let objectRotationX = 0;
    let objectRotationY = 0;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      torusKnot.rotation.x = objectRotationX + elapsedTime * 0.15;
      torusKnot.rotation.y = objectRotationY + elapsedTime * 0.2;

      camera.position.y = Math.sin(elapsedTime * 0.8) * 0.15;
      camera.position.x = Math.cos(elapsedTime * 0.5) * 0.1;
      camera.rotation.z = Math.sin(elapsedTime * 0.3) * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- 5. Responsive Resizing ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // --- 6. GSAP Animations ---
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.to(camera.position, { z: 4.0, ease: "power1.inOut" }, 0)
      .to(torusKnot.rotation, { x: "+=2", z: "+=1.5", ease: "none" }, 0)
      .to(contentRef.current, { y: -100, opacity: 0, ease: "none" }, 0);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* 3D WebGL Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Content Overlay */}
      <div className="relative container mx-auto" style={{ zIndex: 1 }}>
        <div
          ref={contentRef}
          className="max-w-3xl"
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          <div className="backdrop-blur-md bg-background/30 border border-border/30 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Cambridge, Massachusetts
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.08] mb-6">
              Owners.{" "}
              <br className="hidden md:block" />
              Developers.{" "}
              <br className="hidden md:block" />
              <span className="text-gold italic">Operators.</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-cream-muted leading-relaxed max-w-xl mb-10 font-light">
              Patrick W. Barrett III and Tim Johnson, CPM are hands-on Cambridge
              property owners and developers — acquiring, improving, and
              operating multifamily and mixed-use assets across high-growth
              markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors duration-200 shadow-gold"
              >
                View Our Portfolio
              </a>
              <a
                href="#submit"
                className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-cream/30 text-cream hover:border-gold hover:text-gold transition-all duration-200"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50" style={{ zIndex: 1 }}>
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
