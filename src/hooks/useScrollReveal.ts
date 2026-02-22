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
    const children = ref.current.querySelectorAll("[data-reveal]");
    const targets = children.length > 0 ? children : [ref.current];

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y: opts.y ?? 40 });

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: opts.duration ?? 0.8,
          stagger: opts.stagger ?? 0.15,
          ease: "power3.out",
          delay: opts.delay ?? 0,
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return ref;
}
