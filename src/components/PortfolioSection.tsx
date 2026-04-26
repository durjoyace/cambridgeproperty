import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import hotel907 from "@/assets/907-main.jpg";
import building2 from "@/assets/building-2.jpg";
import storyStreet from "@/assets/17-story-street.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const portfolioItems = [
  {
    slug: "907-main-hotel",
    label: "907 Main — The Lark Cambridge",
    location: "Central Square, Cambridge",
    units: "67 keys",
    description:
      "Ground-up boutique hotel developed through Cambridge's complex entitlement process. $37.75M institutional financing, designed by Gensler Boston, now operating as The Lark Cambridge.",
    tag: "Development",
    image: hotel907,
  },
  {
    slug: "17-story-street",
    label: "17 Story Street — Harriet Jacobs House",
    location: "Harvard Square, Cambridge",
    units: "50+ homes",
    description:
      "Historic preservation of a significant African American heritage site paired with new residential construction. Cambridge Historical Commission approved 7–0 after five years of community work.",
    tag: "Preservation + Development",
    image: storyStreet,
  },
  {
    slug: undefined,
    label: "Stabilized Portfolio",
    location: "Cambridge & Somerville",
    units: "75 doors",
    description:
      "Vertically-integrated ownership and operations across 63 residential units and 12 retail spaces — the operating base that Thane & Reeve Management runs in-house.",
    tag: "Held · Managed",
    image: building2,
  },
];

const trackRecord = [
  {
    value: "$45M",
    label: "Capital developed",
    sub: "907 Main · ground-up boutique hotel",
  },
  {
    value: "$37.75M",
    label: "Institutional financing",
    sub: "Construction debt closed on principal balance sheet",
  },
  {
    value: "192",
    label: "Units owned & operated",
    sub: "Cambridge & Somerville · in-house management",
  },
  {
    value: "Boston · NYC",
    label: "Primary corridor",
    sub: "Northeast markets, fifteen years operated",
  },
];

export default function PortfolioSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="portfolio"
      className="relative bg-paper py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading + subtitle */}
          <div className="mb-16 max-w-4xl" data-reveal>
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              Portfolio &amp; track record
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.18] text-ink tracking-tight mb-6">
              Fifteen years of institutional operating experience, reshaped into a single firm.
            </h2>
            <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/85 max-w-2xl">
              A curated list, not a funnel. Each asset has been underwritten to the
              firm's standard and is held to justify its place in the portfolio.
            </p>
          </div>

          {/* Track record — institutional figures */}
          <div className="mb-20" data-reveal>
            <div className="flex items-baseline justify-between mb-8">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass">
                The record, in figures
              </p>
              <p className="font-serif italic text-ink/55 text-sm">
                Verified &middot; current
              </p>
            </div>
            <div className="h-px w-full bg-ink/20 mb-10" data-reveal-rule />
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.25] text-ink tracking-tight max-w-4xl mb-12 md:mb-14">
              <span className="text-ink">$82.75M deployed</span> across one
              ground&#8209;up development, one preservation project, and a
              192&#8209;door operating portfolio.{" "}
              <span className="italic text-ink/70">
                Two principals on the wire for every transaction.
              </span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-10">
              {trackRecord.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col ${
                    i > 0 ? "md:border-l md:border-ink/15 md:pl-10" : ""
                  }`}
                >
                  <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-none tracking-tight mb-5">
                    {s.value}
                  </div>
                  <div className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/65 mb-2">
                    {s.label}
                  </div>
                  <div className="font-serif italic text-ink/55 text-sm leading-snug">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio cards */}
          <div className="grid md:grid-cols-3 gap-8" data-reveal>
            {portfolioItems.map((item, i) => {
              const inner = (
                <>
                  <div className="relative h-56 overflow-hidden mb-5 bg-paper-warm">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      loading="lazy"
                      width={600}
                      height={400}
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-brass">
                      {item.tag}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-ink/30 group-hover:text-brass transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-ink mb-1 tracking-tight leading-snug">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-ink/55 mb-4">
                    {item.location} · {item.units}
                  </p>
                  <p className="font-serif text-base text-ink/80 leading-[1.65]">
                    {item.description}
                  </p>
                </>
              );

              if (item.slug) {
                return (
                  <Link
                    key={i}
                    to={`/portfolio/${item.slug}`}
                    className="group block focus-visible:outline-none"
                  >
                    {inner}
                  </Link>
                );
              }
              return (
                <div key={i} className="group">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center" data-reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-brass hover:text-brass transition-colors duration-300"
            >
              View full portfolio
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
