import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Direct Sourcing",
    description:
      "We identify opportunities through principal-to-principal relationships, proprietary market intelligence, and Patrick's 20 years of entitlement-zone expertise. No open-market bidding, no broker dependency.",
  },
  {
    number: "02",
    title: "Entitlement Mastery",
    description:
      "Cambridge zoning is the complexity moat. Patrick has navigated CHC hearings, special permits, overlay districts, and AG-level regulatory processes — converting political capital into development rights.",
  },
  {
    number: "03",
    title: "Long-Term Ownership",
    description:
      "Every asset is underwritten to hold. We stress-test downside scenarios before committing capital, then operate with vertically integrated property management. No flipping, no exit pressure.",
  },
];

export default function OperatorFramework() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="relative section-pad bg-charcoal-mid overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div data-reveal className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Our Framework</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              The B&amp;J
              <br />
              <span className="text-gold">Operator Model</span>
            </h2>
          </div>
          <p data-reveal className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
            Institutional investors invest in repeatable systems. Our model converts structural market advantages into disciplined, replicable execution across every asset.
          </p>
        </div>

        {/* Pillars */}
        <div data-reveal className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative bg-charcoal border border-border/50 p-8 md:p-10 flex flex-col hover:border-gold/20 transition-all duration-500"
            >
              <div className="font-display text-[4.5rem] font-semibold leading-none text-gold/[0.07] group-hover:text-gold/[0.15] transition-colors duration-500 mb-6 -ml-1">
                {pillar.number}
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-cream mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-cream-muted font-light leading-[1.7] mt-auto">
                {pillar.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/0 group-hover:via-gold/40 group-hover:to-gold/0 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Risk framing — institutional signal */}
        <div data-reveal className="mt-16 p-8 md:p-12 bg-charcoal border border-gold/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-4">
                Risk Management Philosophy
              </div>
              <p className="font-sans text-base md:text-lg text-cream leading-[1.7] font-light">
                We underwrite like fiduciaries, not flippers. Basis discipline, entitlement expertise as risk arbitrage, and vertically integrated operations mean we protect downside before pursuing upside.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Basis Discipline", desc: "Below-replacement-cost entry" },
                { label: "Entitlement Moat", desc: "Regulatory complexity as barrier" },
                { label: "Vertical Integration", desc: "Own, manage, and operate" },
                { label: "Long-Term Hold", desc: "No exit pressure or fund cycles" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-sans text-xs font-medium text-cream mb-1">{item.label}</div>
                  <div className="font-sans text-[10px] text-cream-muted/50 font-light">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
