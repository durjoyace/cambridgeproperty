import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroAvif from "@/assets/907-main.jpg?w=768;1280;1920&format=avif&as=srcset";
import heroWebp from "@/assets/907-main.jpg?w=768;1280;1920&format=webp&as=srcset";
import heroFallback from "@/assets/907-main.jpg?w=1280&as=url";
import { trackEvent } from "@/components/Analytics";

/**
 * Thane & Reeve home hero.
 *
 * Ogilvy revision: a commanding architectural photograph behind a single
 * argumentative headline. The hero takes a position an LP can disagree
 * with, then substantiates it. The wordmark lives in the navbar; it does
 * not need to introduce itself again ten pixels below.
 *
 * The photograph (907 Main / The Lark Cambridge) is graded to near-archival
 * black-and-white with a dark gradient anchoring the lower third for text
 * legibility — the field a firm operates on, not a brand poster.
 *
 * Performance: the photograph is the LCP element — served as AVIF/WebP with
 * fetchPriority="high" so it paints fast. Copy is visible by default with a
 * lightweight CSS entrance (no JS/GSAP on the critical path), so nothing the
 * crawler or the user sees is gated behind a script.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-ink">
      {/* Photograph — full bleed, archival B&W grade. LCP element. */}
      <picture>
        <source type="image/avif" srcSet={heroAvif} sizes="100vw" />
        <source type="image/webp" srcSet={heroWebp} sizes="100vw" />
        <img
          src={heroFallback}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.78]"
        />
      </picture>

      {/* Tonal anchor — dark from the bottom for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/85"
      />
      {/* Subtle paper-grain warmth at the very top, so the editorial strip lands */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent"
      />

      {/* Top editorial meta strip */}
      <div className="hero-enter relative pt-20 md:pt-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between font-sans text-[10px] tracking-[0.28em] uppercase text-paper/70">
            <span>Founding Document &middot; MMXXVI</span>
            <span className="hidden md:inline font-serif italic tracking-normal normal-case text-[13px] text-paper/80">
              Real Property &middot; Boston &middot; NYC Corridor
            </span>
            <span>Est. MMXXVI</span>
          </div>
          <div className="mt-4 h-px w-full bg-paper/25" />
        </div>
      </div>

      {/* Argument block — anchored to lower third */}
      <div className="hero-enter hero-enter-delayed relative flex-1 flex items-end pb-20 md:pb-28 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-brass-light" />
              <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-brass-light">
                Thane &amp; Reeve &middot; Real Property
              </span>
            </div>
            <h1 className="font-serif text-paper text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Most real estate firms separate ownership from operations.{" "}
              <span className="italic text-brass-light">We refuse to.</span>
            </h1>
            <p className="mt-10 max-w-2xl font-serif text-lg md:text-xl leading-[1.65] text-paper/85">
              A Boston-based firm organized around three disciplines &mdash;
              Capital, Development, Management &mdash; held under one
              accountable roof. Two principals.{" "}
              <span className="text-paper">$82.75M deployed.</span>{" "}
              <span className="text-paper">192 doors.</span> Personal capital
              in every transaction.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                onClick={() => trackEvent("cta_click", { event_label: "hero_about" })}
                className="group inline-flex items-center justify-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass-light/60 focus-visible:outline-none"
              >
                Read the firm
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sell-your-property"
                onClick={() => trackEvent("cta_click", { event_label: "hero_submit_property" })}
                className="inline-flex items-center justify-center font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 border border-paper/40 text-paper hover:border-paper hover:bg-paper/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brass-light/60 focus-visible:outline-none"
              >
                Submit a property
              </Link>
            </div>
          </div>

          {/* Photograph attribution — bottom-right marginalia */}
          <div className="mt-16 md:mt-20 pt-6 border-t border-paper/15 flex items-end justify-between text-paper/55">
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase">
              Photographed &middot; 907 Main
            </span>
            <span className="font-serif italic text-sm hidden md:inline text-paper/65">
              The Lark Cambridge &middot; Central Square &middot; 67 keys
            </span>
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase">
              Plate &middot; Frontispiece
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
