const steps = [
  {
    number: "01",
    title: "Source Off-Market",
    description:
      "We identify opportunities through direct owner relationships, broker networks, and proprietary market intelligence — not the open MLS.",
  },
  {
    number: "02",
    title: "Underwrite Rigorously",
    description:
      "Every deal is underwritten by Patrick and Tim directly. We stress-test assumptions, model downside scenarios, and only move forward when conviction is high.",
  },
  {
    number: "03",
    title: "Develop &amp; Improve",
    description:
      "We execute targeted capital improvements — unit renovations, common area upgrades, energy efficiency retrofits — to unlock embedded value.",
  },
  {
    number: "04",
    title: "Operate &amp; Hold",
    description:
      "Post-close, our AppFolio-powered management infrastructure keeps operations tight. We are long-term owners, not transactional flippers.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-charcoal">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                How We Work
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              Our Development Process
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-cream-muted font-light lg:self-end">
            From sourcing to stabilization, every step is owner-led. Patrick and Tim are directly involved in every acquisition, improvement, and operational decision — no delegation, no bureaucracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <div key={i} className="bg-charcoal p-8 flex flex-col group hover:bg-charcoal-mid transition-colors duration-300">
              <div className="font-display text-5xl font-semibold text-gold/20 group-hover:text-gold/30 transition-colors duration-300 mb-5 leading-none">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-cream mb-3 leading-snug" dangerouslySetInnerHTML={{ __html: step.title }} />
              <p className="font-sans text-sm text-cream-muted font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
