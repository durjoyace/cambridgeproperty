import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pressHighlights = [
  {
    source: "WBUR 90.9",
    title: "Cambridge Hotel Development Coverage",
    type: "Media",
  },
  {
    source: "Cambridge Historical Commission",
    title: "Harriet Jacobs House — Approved 7-0 Unanimous",
    type: "Government Record",
  },
  {
    source: "Cambridge City Council",
    title: "Central Square Overlay Zoning — Authored by Patrick Barrett",
    type: "Policy",
  },
  {
    source: "Harvard Crimson",
    title: "Story Street Development Coverage",
    type: "Media",
  },
];

export default function PressProof() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="relative section-pad bg-charcoal-mid overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div data-reveal className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left — narrative */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Public Record</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-[1.1] tracking-tight mb-6">
              In the
              <br />
              <span className="text-gold">Record</span>
            </h2>
            <p className="font-sans text-sm leading-[1.8] text-cream-muted font-light mb-8 max-w-sm">
              Others imply credibility. We have documented public record — government hearings, institutional media coverage, and policy contributions verified by independent sources.
            </p>
            <Link
              to="/press"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold group focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              <span className="border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-300">
                Full Press &amp; Record
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right — highlights */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-px bg-border/30">
              {pressHighlights.map((item, i) => (
                <div
                  key={i}
                  className="group bg-charcoal p-6 md:p-8 flex items-center justify-between hover:bg-charcoal-mid transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/30 bg-gold/5 px-2.5 py-1">
                        {item.type}
                      </span>
                      <span className="font-sans text-[10px] text-cream-muted/40">{item.source}</span>
                    </div>
                    <div className="font-sans text-sm text-cream font-light group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-cream-muted/20 group-hover:text-gold/60 transition-colors duration-300 shrink-0 ml-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
