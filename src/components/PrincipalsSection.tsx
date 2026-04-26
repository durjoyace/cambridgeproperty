import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import patrickHeadshot from "@/assets/patrick-barrett.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Editorial principal spread for the home page. Both partners shown at
 * parity. Patrick carries a real photograph; Tim is rendered as a
 * deliberate typographic plate (his initials in display Fraunces inside
 * an editorial frame) until a real portrait is commissioned. The plate
 * reads as institutional restraint, the way a quarterly report would
 * leave a chair set for the partner who is travelling.
 */
export default function PrincipalsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper-warm py-24 md:py-36 overflow-hidden"
      aria-label="The principals"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14 md:mb-20 grid lg:grid-cols-[1fr_auto] items-end gap-8" data-reveal>
            <div>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-brass mb-5">
                The Principals
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.12] text-ink tracking-tight max-w-3xl">
                Two senior decisions per investment.{" "}
                <span className="italic">Personal capital in every transaction.</span>
              </h2>
            </div>
            <p className="font-serif italic text-ink/60 text-sm md:text-base max-w-xs lg:text-right">
              Boston &middot; NYC corridor
              <br />
              Established MMXXVI
            </p>
          </div>

          <div className="h-px w-full bg-ink/20 mb-14 md:mb-20" data-reveal-rule />

          {/* Two-up principal grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Patrick — real portrait */}
            <article data-reveal>
              <figure className="relative aspect-[4/5] overflow-hidden bg-ink/10 mb-6">
                <img
                  src={patrickHeadshot}
                  alt="Patrick Barrett, Founder and Managing Partner of Thane & Reeve"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.05] brightness-[0.97]"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </figure>
              <figcaption className="mb-6 flex items-baseline justify-between font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
                <span>Portrait &middot; Boston, MMXXVI</span>
                <span className="font-serif italic tracking-normal normal-case text-sm text-ink/65">
                  Plate №&thinsp;01
                </span>
              </figcaption>
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-4">
                Founder &amp; Managing Partner
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-ink tracking-tight leading-[1.05] mb-4">
                Patrick Barrett
              </h3>
              <p className="font-serif italic text-ink/65 text-sm md:text-base mb-6 leading-snug">
                Cambridge zoning attorney &middot; developer &middot;
                Investment Committee chair
              </p>
              <div className="h-px w-12 bg-brass mb-6" />
              <p className="font-serif text-base md:text-lg leading-[1.7] text-ink/85 mb-6">
                Originated and developed the $45M, 67&#8209;key 907 Main
                hotel through one of the most complex entitlement processes
                in the country. Authored the Central Square Overlay zoning
                amendments adopted by the Cambridge City Council in 2017.
                Led 17 Story Street to unanimous approval before the
                Cambridge Historical Commission.
              </p>
              <p className="font-serif italic text-base md:text-lg leading-[1.55] text-ink/85 border-l-[1.5px] border-brass pl-5">
                The operating work is where real returns are made &mdash;
                or lost.
              </p>
            </article>

            {/* Tim — typographic plate (real portrait pending) */}
            <article data-reveal>
              <figure className="relative aspect-[4/5] overflow-hidden bg-paper border border-ink/15 mb-6 flex items-center justify-center">
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                  <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-ink/45">
                    Portrait, sittings &mdash; 2026
                  </span>
                  <span className="font-serif italic text-ink/45 text-xs">
                    in studio
                  </span>
                </div>
                <div className="text-center">
                  <span className="font-serif font-normal text-ink tracking-wordmark text-7xl md:text-8xl leading-none">
                    TJ
                  </span>
                  <div className="mt-6 mx-auto h-px w-16 bg-brass" />
                  <p className="mt-6 font-serif italic text-ink/60 text-sm md:text-base">
                    Timothy Johnson
                  </p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-ink/40">
                    Plate held
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-ink/40">
                    Tim Johnson &middot; CPM
                  </span>
                </div>
              </figure>
              <figcaption className="mb-6 flex items-baseline justify-between font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
                <span>Plate held &middot; sittings 2026</span>
                <span className="font-serif italic tracking-normal normal-case text-sm text-ink/65">
                  Plate №&thinsp;02
                </span>
              </figcaption>
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-4">
                Partner &middot; CPM
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-ink tracking-tight leading-[1.05] mb-4">
                Timothy Johnson
              </h3>
              <p className="font-serif italic text-ink/65 text-sm md:text-base mb-6 leading-snug">
                Certified Property Manager &middot; named principal on
                $37.75M institutional construction financing
              </p>
              <div className="h-px w-12 bg-brass mb-6" />
              <p className="font-serif text-base md:text-lg leading-[1.7] text-ink/85 mb-6">
                Runs Thane &amp; Reeve Management: asset strategy, property
                operations, leasing, capital planning, and quarterly
                investor reporting across the firm&rsquo;s portfolio. The
                team that holds the asset at year seven is the team that
                bought it at year one.
              </p>
              <p className="font-serif italic text-base md:text-lg leading-[1.55] text-ink/85 border-l-[1.5px] border-brass pl-5">
                Most underperformance in real estate is operational, not
                strategic.
              </p>
            </article>
          </div>

          {/* Footer rule */}
          <div className="mt-16 md:mt-20 pt-10 border-t border-ink/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-serif italic text-ink/65 text-sm md:text-base max-w-xl">
              The firm is deliberately small. Two senior decisions per
              investment. Personal capital in every transaction.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-brass hover:text-brass transition-colors duration-300 self-start sm:self-auto"
            >
              Read the firm
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
