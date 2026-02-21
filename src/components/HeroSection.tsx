import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function createArchitecturalGroup(): THREE.Group {
  const group = new THREE.Group();

  const wireMat = new THREE.LineBasicMaterial({ color: 0xaabbcc, transparent: true, opacity: 0.35 });
  const edgeMat = new THREE.LineBasicMaterial({ color: 0xddeeff, transparent: true, opacity: 0.6 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 });

  // Main tower — tall box
  const towerGeo = new THREE.BoxGeometry(1.8, 5, 1.8);
  const towerEdges = new THREE.EdgesGeometry(towerGeo);
  const towerWire = new THREE.LineSegments(towerEdges, edgeMat);
  towerWire.position.set(0, 0.5, 0);
  group.add(towerWire);

  // Tower fill (subtle)
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

  // Side wing — lower, wider
  const wingGeo = new THREE.BoxGeometry(2.8, 2.2, 1.4);
  const wingEdges = new THREE.EdgesGeometry(wingGeo);
  const wingWire = new THREE.LineSegments(wingEdges, edgeMat);
  wingWire.position.set(2.2, -1.4, 0.2);
  group.add(wingWire);

  const wingFill = new THREE.Mesh(wingGeo, glowMat);
  wingFill.position.copy(wingWire.position);
  group.add(wingFill);

  // Canopy / overhang
  const canopyGeo = new THREE.BoxGeometry(3.2, 0.08, 2.0);
  const canopyEdges = new THREE.EdgesGeometry(canopyGeo);
  const canopyWire = new THREE.LineSegments(canopyEdges, edgeMat.clone());
  canopyWire.material.opacity = 0.8;
  canopyWire.position.set(2.2, -0.2, 0.3);
  group.add(canopyWire);

  // Secondary block — back left
  const block2Geo = new THREE.BoxGeometry(1.2, 3.2, 1.0);
  const block2Edges = new THREE.EdgesGeometry(block2Geo);
  const block2Wire = new THREE.LineSegments(block2Edges, edgeMat);
  block2Wire.position.set(-1.6, -0.4, -0.8);
  group.add(block2Wire);

  const block2Fill = new THREE.Mesh(block2Geo, glowMat);
  block2Fill.position.copy(block2Wire.position);
  group.add(block2Fill);

  // Ground plane grid
  const gridSize = 8;
  const gridDiv = 16;
  const gridHelper = new THREE.GridHelper(gridSize, gridDiv, 0x556677, 0x334455);
  gridHelper.position.y = -3;
  gridHelper.material.transparent = true;
  (gridHelper.material as THREE.Material).opacity = 0.2;
  group.add(gridHelper);

  // Vertical accent lines (construction guides)
  const accentGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -3, 0),
    new THREE.Vector3(0, 4, 0),
  ]);
  const accentLine = new THREE.Line(accentGeo, new THREE.LineBasicMaterial({ color: 0x8899aa, transparent: true, opacity: 0.15 }));
  group.add(accentLine);

  const accentLine2 = accentLine.clone();
  accentLine2.position.set(2.2, 0, 0.2);
  group.add(accentLine2);

  return group;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    // --- Scene ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d1117, 0.06);

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(5, 2, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // --- Architectural object ---
    const building = createArchitecturalGroup();
    building.rotation.y = Math.PI * 0.15;
    scene.add(building);

    // --- Lighting: Monochrome silver ---
    const keyLight = new THREE.DirectionalLight(0xddeeff, 2.0);
    keyLight.position.set(4, 6, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x99aabb, 1.0);
    fillLight.position.set(-4, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, -2, -6);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x445566, 0.5);
    scene.add(ambientLight);

    // --- Animation ---
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Slow rotation
      building.rotation.y = Math.PI * 0.15 + elapsed * 0.08;

      // Breathing camera
      camera.position.y = 2 + Math.sin(elapsed * 0.6) * 0.12;
      camera.position.x = 5 + Math.cos(elapsed * 0.4) * 0.08;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // --- GSAP ---
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.to(camera.position, { z: 5, y: 4, ease: "power1.inOut" }, 0)
      .to(building.rotation, { y: "+=1.2", ease: "none" }, 0)
      .to(contentRef.current, { y: -100, opacity: 0, ease: "none" }, 0);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

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

      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50" style={{ zIndex: 1 }}>
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
