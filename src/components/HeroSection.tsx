import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wordmark } from "@/components/brand/Wordmark";
import { trackEvent } from "@/components/Analytics";

gsap.registerPlugin(ScrollTrigger);

/**
 * Thane & Reeve home hero.
 * Editorial paper-on-ink treatment from the founding document's
 * About Page composition: header rules, centered wordmark, italic
 * tagline, thesis paragraph, quiet CTAs.
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const thesisRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      gsap.set([headerRef.current, wordmarkRef.current, taglineRef.current, thesisRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0)
      .to(wordmarkRef.current, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }, 0.15)
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.55)
      .to(thesisRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.75)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.95);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-paper"
    >
      {/* Top editorial rule + meta */}
      <div
        ref={headerRef}
        className="absolute top-0 inset-x-0 pt-20 md:pt-24 px-6 md:px-12 opacity-0"
        style={{ transform: "translateY(-8px)" }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
            <span>Founding Document</span>
            <span className="hidden md:inline font-serif italic tracking-normal normal-case text-[13px] text-ink/70">
              Est. MMXXVI
            </span>
            <span>Real Property · Northeast</span>
          </div>
          <div className="mt-4 h-px w-full bg-ink/20" />
        </div>
      </div>

      {/* Centered wordmark + tagline block */}
      <div className="relative container mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={wordmarkRef}
            className="opacity-0"
            style={{ transform: "translateY(24px)" }}
          >
            <div className="mb-3">
              <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-ink/55">
                For the Partners
              </span>
            </div>
            <Wordmark size="xl" tone="ink" sealed />
          </div>

          <div
            ref={taglineRef}
            className="mt-10 opacity-0"
            style={{ transform: "translateY(16px)" }}
          >
            <div className="flex items-center justify-center gap-5">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55">
                Real Property
              </span>
              <span className="h-1 w-1 rounded-full bg-brass" aria-hidden />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55">
                Northeast
              </span>
            </div>
            <p className="mt-8 font-serif italic text-xl md:text-2xl text-ink/85">
              Land held. Land managed.
            </p>
          </div>

          <div
            ref={thesisRef}
            className="mt-14 max-w-2xl mx-auto opacity-0"
            style={{ transform: "translateY(20px)" }}
          >
            <p className="font-serif text-lg md:text-xl leading-[1.6] text-ink/80">
              A real estate firm built on a thousand-year-old idea: that{" "}
              <em className="text-brass">the ownership of land</em> and{" "}
              <em className="text-brass">the discipline to run it well</em>{" "}
              are two halves of the same job.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0"
            style={{ transform: "translateY(16px)" }}
          >
            <a
              href="/about"
              onClick={() => trackEvent("cta_click", { event_label: "hero_about" })}
              className="group inline-flex items-center justify-center font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-ink text-paper hover:bg-brass transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            >
              Read the firm
            </a>
            <a
              href="/sell-your-property"
              onClick={() => trackEvent("cta_click", { event_label: "hero_submit_property" })}
              className="inline-flex items-center justify-center font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 border border-ink/30 text-ink hover:border-ink hover:bg-ink/5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            >
              Submit a property
            </a>
          </div>
        </div>
      </div>

      {/* Bottom editorial footer rule */}
      <div className="absolute bottom-0 inset-x-0 pb-10 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="h-px w-full bg-ink/15 mb-4" />
          <div className="flex items-center justify-between font-sans text-[10px] tracking-[0.28em] uppercase text-ink/50">
            <span>Thane &amp; Reeve Holdings LLC</span>
            <span className="hidden sm:inline font-serif italic tracking-normal normal-case text-[12px] text-ink/60">
              Boston · NYC Corridor
            </span>
            <span>thaneandreeve.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
