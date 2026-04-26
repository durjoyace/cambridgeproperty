import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * "Who we serve" from the founding doc. Family offices and HNW principals,
 * direct exposure, deal-by-deal, GP capital in every transaction.
 * Ink background — the sober terms-page treatment from the deck.
 */
export default function CapitalAlignment() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      className="relative bg-ink py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start" data-reveal>
            {/* Left — narrative */}
            <div>
              <p className="font-serif italic text-base md:text-lg text-brass-light mb-6">
                Who we serve
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.18] text-paper mb-8">
                Deal-by-deal syndication.
                <br />
                <em className="text-brass-light font-serif italic">Readable terms.</em>
                <br />
                GP capital in every transaction.
              </h2>
              <p className="font-serif text-lg md:text-xl leading-[1.7] text-paper/85 mb-6">
                We work with family offices, high-net-worth principals, and
                institutional capital seeking direct exposure to real estate
                alongside a small, aligned operator.
              </p>
              <p className="font-serif text-base md:text-lg leading-[1.7] text-paper/70">
                We don't raise blind pools. We don't collect assets to grow AUM. We
                underwrite each deal on its own terms, bring it to investors who have
                earned the right to see it, and walk if the math doesn't work.
              </p>
              <Link
                to="/capital"
                className="mt-10 inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase text-paper border-b border-paper/30 pb-1 hover:border-brass-light hover:text-brass-light transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass-light/60 focus-visible:outline-none"
              >
                Meet Thane &amp; Reeve Capital
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — terms table */}
            <div className="border border-paper/15">
              <TermRow label="Structure" value="Deal-by-deal LP/GP" />
              <TermRow label="Preferred Return" value="LP preferred · waterfall terms" />
              <TermRow label="Asset Mgmt. Fee" value="Transparent · asset-level" />
              <TermRow label="GP Commitment" value="Meaningful · every deal" />
              <TermRow label="Hold Period" value="5–10 years · asset-dependent" />
              <TermRow label="Reporting" value="Quarterly · audited annually" last />
              <p className="p-6 md:p-8 font-serif italic text-sm text-paper/65 leading-[1.75]">
                Every deal closes on its own documents. No blind pool, no
                cross-collateralization, no surprise capital calls. The GP invests
                meaningful personal capital in every transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TermRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-6 px-6 md:px-8 py-4 md:py-5 ${
        last ? "" : "border-b border-paper/10"
      }`}
    >
      <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-paper/55">
        {label}
      </span>
      <span className="font-serif italic text-sm md:text-base text-paper text-right">
        {value}
      </span>
    </div>
  );
}
