import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    let animationFrameId: number;
    let renderer: any;

    // Dynamic import of Three.js
    import("three").then((THREE) => {
      if (!canvasRef.current || !sectionRef.current) return;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0d1117, 0.05);

      const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(6, 2.5, 11);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      const building = createArchitecturalGroup(THREE);
      building.rotation.y = Math.PI * 0.15;
      scene.add(building);

      // Lighting
      const keyLight = new THREE.DirectionalLight(0xddeeff, 2.0);
      keyLight.position.set(4, 6, 3);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x99aabb, 1.0);
      fillLight.position.set(-4, 2, -2);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
      rimLight.position.set(0, -2, -6);
      scene.add(rimLight);

      const ambientLight = new THREE.AmbientLight(0x445566, 0.4);
      scene.add(ambientLight);

      setThreeLoaded(true);

      // Animation loop
      const clock = new THREE.Clock();

      const animate = () => {
        const elapsed = clock.getElapsedTime();
        building.rotation.y = Math.PI * 0.15 + elapsed * 0.06;
        camera.position.y = 2.5 + Math.sin(elapsed * 0.5) * 0.08;
        camera.position.x = 6 + Math.cos(elapsed * 0.35) * 0.06;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      // Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };
      window.addEventListener("resize", handleResize);

      // Scroll parallax
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      scrollTl.to(camera.position, { z: 5, y: 4.5, ease: "power1.inOut" }, 0)
        .to(building.rotation, { y: "+=1.2", ease: "none" }, 0)
        .to(headlineRef.current, { y: -80, opacity: 0, ease: "none" }, 0)
        .to(subtextRef.current, { y: -60, opacity: 0, ease: "none" }, 0)
        .to(ctaRef.current, { y: -40, opacity: 0, ease: "none" }, 0)
        .to(labelRef.current, { y: -30, opacity: 0, ease: "none" }, 0);

      // Store cleanup ref
      (window as any).__heroCleanup = () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    // GSAP entrance — staggered cinematic reveal
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0)
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, 0.15)
      .to(subtextRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.5)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.7);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (renderer) renderer.dispose();
      if ((window as any).__heroCleanup) (window as any).__heroCleanup();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${threeLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ zIndex: 0 }}
      />

      {/* Fallback gradient while Three.js loads */}
      {!threeLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-mid to-charcoal" style={{ zIndex: 0 }} />
      )}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative container mx-auto" style={{ zIndex: 2 }}>
        <div className="max-w-3xl">
          {/* Label */}
          <div
            ref={labelRef}
            className="flex items-center gap-4 mb-10"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent" />
            <span className="section-label">Cambridge, Massachusetts</span>
          </div>

          {/* Headline */}
          <div
            ref={headlineRef}
            style={{ opacity: 0, transform: "translateY(32px)" }}
          >
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold text-cream leading-[1.05] tracking-tight">
              Owners.
              <br />
              Developers.
              <br />
              <span className="text-gold italic">Operators.</span>
            </h1>
          </div>

          {/* Subtext */}
          <div
            ref={subtextRef}
            className="mt-8"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <p className="font-sans text-base md:text-lg text-cream-muted leading-[1.7] max-w-lg font-light">
              Patrick W. Barrett III and Tim Johnson, CPM are hands-on Cambridge
              and Boston property owners and developers — acquiring, improving,
              and operating multifamily and mixed-use assets across Greater
              Boston.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-12 flex flex-col sm:flex-row gap-4"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
            >
              View Our Portfolio
            </a>
            <a
              href="#submit"
              className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ zIndex: 2 }}>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function createArchitecturalGroup(THREE: any) {
  const group = new THREE.Group();

  const wireMat = new THREE.LineBasicMaterial({ color: 0xaabbcc, transparent: true, opacity: 0.25 });
  const edgeMat = new THREE.LineBasicMaterial({ color: 0xddeeff, transparent: true, opacity: 0.45 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.04 });

  // Main tower
  const towerGeo = new THREE.BoxGeometry(1.8, 5, 1.8);
  const towerEdges = new THREE.EdgesGeometry(towerGeo);
  const towerWire = new THREE.LineSegments(towerEdges, edgeMat);
  towerWire.position.set(0, 0.5, 0);
  group.add(towerWire);

  const towerFill = new THREE.Mesh(towerGeo, glowMat);
  towerFill.position.copy(towerWire.position);
  group.add(towerFill);

  // Floor lines inside tower
  for (let i = -2; i <= 3; i += 0.7) {
    const floorGeo = new THREE.PlaneGeometry(1.78, 1.78);
    const floorEdges = new THREE.EdgesGeometry(floorGeo);
    const floorLine = new THREE.LineSegments(floorEdges, wireMat);
    floorLine.rotation.x = -Math.PI / 2;
    floorLine.position.set(0, i + 0.5, 0);
    group.add(floorLine);
  }

  // Side wing
  const wingGeo = new THREE.BoxGeometry(2.8, 2.2, 1.4);
  const wingEdges = new THREE.EdgesGeometry(wingGeo);
  const wingWire = new THREE.LineSegments(wingEdges, edgeMat);
  wingWire.position.set(2.2, -1.4, 0.2);
  group.add(wingWire);

  const wingFill = new THREE.Mesh(wingGeo, glowMat);
  wingFill.position.copy(wingWire.position);
  group.add(wingFill);

  // Canopy
  const canopyGeo = new THREE.BoxGeometry(3.2, 0.08, 2.0);
  const canopyEdges = new THREE.EdgesGeometry(canopyGeo);
  const canopyMat = edgeMat.clone();
  canopyMat.opacity = 0.6;
  const canopyWire = new THREE.LineSegments(canopyEdges, canopyMat);
  canopyWire.position.set(2.2, -0.2, 0.3);
  group.add(canopyWire);

  // Secondary block
  const block2Geo = new THREE.BoxGeometry(1.2, 3.2, 1.0);
  const block2Edges = new THREE.EdgesGeometry(block2Geo);
  const block2Wire = new THREE.LineSegments(block2Edges, edgeMat);
  block2Wire.position.set(-1.6, -0.4, -0.8);
  group.add(block2Wire);

  const block2Fill = new THREE.Mesh(block2Geo, glowMat);
  block2Fill.position.copy(block2Wire.position);
  group.add(block2Fill);

  // Ground plane grid
  const gridHelper = new THREE.GridHelper(8, 16, 0x556677, 0x334455);
  gridHelper.position.y = -3;
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.15;
  group.add(gridHelper);

  // Vertical accent lines
  const accentGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -3, 0),
    new THREE.Vector3(0, 4, 0),
  ]);
  const accentLine = new THREE.Line(accentGeo, new THREE.LineBasicMaterial({ color: 0x8899aa, transparent: true, opacity: 0.1 }));
  group.add(accentLine);

  const accentLine2 = accentLine.clone();
  accentLine2.position.set(2.2, 0, 0.2);
  group.add(accentLine2);

  return group;
}
