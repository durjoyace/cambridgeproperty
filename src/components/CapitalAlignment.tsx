import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CapitalAlignment() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="relative section-pad bg-charcoal overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — narrative */}
          <div data-reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Capital Partnership</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-8">
              Why B&amp;J
              <br />
              <span className="text-gold">Instead of a Fund</span>
            </h2>
            <p className="font-sans text-base md:text-lg leading-[1.8] text-cream-muted font-light mb-6 max-w-md">
              The market institutional firms find too small is the market we built our platform around. Complex entitlement zones, sub-$50M transactions, and regulatory environments that require principal-level involvement — not analyst coverage.
            </p>
            <p className="font-sans text-sm leading-[1.8] text-cream-muted/60 font-light max-w-md mb-10">
              We partner with aligned capital on a deal-by-deal basis. No blind pool, no fund lifecycle constraints. Every co-investment is structured around the asset, not the vehicle.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold group focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              <span className="border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-300">
                About Our Principals
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right — structure + governance signals */}
          <div data-reveal className="flex flex-col gap-6 lg:pt-4">
            {/* Partnership structure */}
            <div className="bg-charcoal-mid border border-border/40 p-8">
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-5">
                Partnership Structure
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Asset Types", value: "Multifamily, Mixed-Use, Urban Retail, Hotel" },
                  { label: "Geography", value: "Massachusetts & select U.S. markets" },
                  { label: "Check Size", value: "$5M — $50M per transaction" },
                  { label: "Structure", value: "JV, Preferred Equity, or Direct Co-Investment" },
                  { label: "Alignment", value: "Principals invest alongside every partner" },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4 py-3 border-b border-border/30 last:border-b-0">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/50 w-28 shrink-0">
                      {item.label}
                    </span>
                    <span className="font-sans text-sm text-cream font-light">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance signal */}
            <div className="bg-charcoal-mid border border-gold/10 p-8">
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-4">
                Institutional Discipline
              </div>
              <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light">
                Quarterly investor reporting. Audited financials on request. AppFolio-powered operational transparency. Every acquisition underwritten with institutional-grade stress testing — because the discipline of a fiduciary doesn't require the bureaucracy of a fund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
