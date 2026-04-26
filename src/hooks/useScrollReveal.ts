import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement>(opts: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealChildren = ref.current.querySelectorAll<HTMLElement>("[data-reveal]");
    const ruleChildren = ref.current.querySelectorAll<HTMLElement>("[data-reveal-rule]");

    const fadeTargets = revealChildren.length > 0 ? revealChildren : [ref.current];

    if (prefersReducedMotion) {
      gsap.set(fadeTargets, { opacity: 1, y: 0 });
      ruleChildren.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    gsap.set(fadeTargets, { opacity: 0, y: opts.y ?? 40 });

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(fadeTargets, {
          opacity: 1,
          y: 0,
          duration: opts.duration ?? 0.8,
          stagger: opts.stagger ?? 0.15,
          ease: "power3.out",
          delay: opts.delay ?? 0,
        });
        ruleChildren.forEach((el, i) => {
          // Stagger the rule reveals by a slow tick so multiple hairlines
          // in the same section don't snap in lockstep.
          window.setTimeout(() => el.classList.add("is-revealed"), 120 + i * 80);
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return ref;
}
