import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/907-main.jpg";
import { trackEvent } from "@/components/Analytics";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Show everything immediately without animation
      gsap.set([labelRef.current, headlineRef.current, subtextRef.current, ctaRef.current], {
        opacity: 1, y: 0,
      });
      return;
    }

    // GSAP entrance — staggered cinematic reveal
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0)
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, 0.15)
      .to(subtextRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.5)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.7);

    // Scroll parallax — skip image parallax on mobile for performance
    const isMobile = window.innerWidth < 768;
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    if (!isMobile) {
      scrollTl.to(imageRef.current, { scale: 1.08, y: 60, ease: "none" }, 0);
    }

    scrollTl
      .to(headlineRef.current, { y: -80, opacity: 0, ease: "none" }, 0)
      .to(subtextRef.current, { y: -60, opacity: 0, ease: "none" }, 0)
      .to(ctaRef.current, { y: -40, opacity: 0, ease: "none" }, 0)
      .to(labelRef.current, { y: -30, opacity: 0, ease: "none" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <img
        ref={imageRef}
        src={heroBg}
        alt="907 Main — The Lark Cambridge, a 67-key boutique hotel developed by Barrett & Johnson in Central Square"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        fetchPriority="high"
        width={1920}
        height={1080}
      />

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" style={{ zIndex: 1 }} />

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
            <span className="section-label">Est. 2010 — Cambridge &amp; Greater Boston</span>
          </div>

          {/* Headline */}
          <div
            ref={headlineRef}
            style={{ opacity: 0, transform: "translateY(32px)" }}
          >
            <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-semibold text-cream leading-[1.08] tracking-tight">
              Operator-Led
              <br />
              Real Estate.
              <br />
              <span className="text-gold italic">Built to Own.</span>
            </h1>
          </div>

          {/* Sub + moat */}
          <div
            ref={subtextRef}
            className="mt-8"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <p className="font-sans text-base md:text-lg text-cream-muted leading-[1.75] max-w-lg font-light">
              We acquire, develop, and operate mixed-use assets in markets
              institutional capital overlooks — with discipline shaped by two
              decades of direct execution.
            </p>
            <p className="font-sans text-sm md:text-base text-gold/70 italic tracking-wide mt-5">
              The transactions too complex or too small for funds are the
              foundation of our platform.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 text-cream-muted/50">
              <a href="mailto:acquisitions@barrettjohnson.com" className="font-sans text-sm font-light hover:text-gold transition-colors duration-300">
                acquisitions@barrettjohnson.com
              </a>
              <a href="tel:6177783521" className="font-sans text-sm font-light hover:text-gold transition-colors duration-300">
                (617) 778-3521
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-12 flex flex-col sm:flex-row gap-4"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <a
              href="#portfolio"
              onClick={() => trackEvent("cta_click", { event_label: "hero_view_portfolio" })}
              className="group inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              Partner With Us
            </a>
            <a
              href="#submit"
              onClick={() => trackEvent("cta_click", { event_label: "hero_submit_property" })}
              className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              Submit a Property
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ zIndex: 2 }} aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
