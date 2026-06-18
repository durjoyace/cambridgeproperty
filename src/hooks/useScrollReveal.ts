import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

/**
 * Scroll-reveal hook. GSAP + ScrollTrigger are loaded *lazily* (dynamic
 * import) so the 114KB animation bundle stays off the critical path — it
 * arrives after hydration, well before the user scrolls to below-the-fold
 * content. Elements already in the viewport are left painted (never hidden),
 * which protects LCP and avoids a visible→hidden flash. Content is visible by
 * default, so a failed/blocked GSAP load degrades gracefully to no animation.
 */
export function useScrollReveal<T extends HTMLElement>(opts: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealChildren = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const ruleChildren = el.querySelectorAll<HTMLElement>("[data-reveal-rule]");
    const fadeTargets = (revealChildren.length > 0
      ? Array.from(revealChildren)
      : [el]) as HTMLElement[];

    const foldLine = () => window.innerHeight * 0.85;

    // Reduced motion (and the no-JS baseline): everything stays visible,
    // hairline rules reveal instantly.
    if (reduced) {
      ruleChildren.forEach((r) => r.classList.add("is-revealed"));
      return;
    }

    let cancelled = false;
    let kill: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !ref.current) return;
      gsap.registerPlugin(ScrollTrigger);

      // Reveal any hairline rules already in view immediately.
      ruleChildren.forEach((r) => {
        if (r.getBoundingClientRect().top <= foldLine()) r.classList.add("is-revealed");
      });

      // Only animate targets that are still below the fold — anything already
      // painted stays put (no flash, no LCP penalty).
      const belowFold = fadeTargets.filter((t) => t.getBoundingClientRect().top > foldLine());
      if (belowFold.length === 0) return;

      gsap.set(belowFold, { opacity: 0, y: opts.y ?? 40 });
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(belowFold, {
            opacity: 1,
            y: 0,
            duration: opts.duration ?? 0.8,
            stagger: opts.stagger ?? 0.15,
            ease: "power3.out",
            delay: opts.delay ?? 0,
          });
          ruleChildren.forEach((r, i) => {
            window.setTimeout(() => r.classList.add("is-revealed"), 120 + i * 80);
          });
        },
      });
      kill = () => trigger.kill();
    })();

    return () => {
      cancelled = true;
      kill?.();
    };
  }, []);

  return ref;
}
