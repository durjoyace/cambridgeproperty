import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    title: "Develop & Improve",
    description:
      "We execute targeted capital improvements — unit renovations, common area upgrades, energy efficiency retrofits — to unlock embedded value.",
  },
  {
    number: "04",
    title: "Operate & Hold",
    description:
      "Post-close, our AppFolio-powered management infrastructure keeps operations tight. We are long-term owners, not transactional flippers.",
  },
];

export default function ProcessSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="relative section-pad bg-charcoal-mid overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div data-reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">How We Work</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Our Development
              <br />
              Process
            </h2>
          </div>
          <p data-reveal className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
            From sourcing to stabilization, every step is owner-led. Patrick and Tim are directly involved in every acquisition, improvement, and operational decision.
          </p>
        </div>

        {/* Steps — cinematic cards */}
        <div data-reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-charcoal border border-border/50 p-8 md:p-10 flex flex-col hover:border-gold/20 transition-all duration-500"
            >
              {/* Large number */}
              <div className="font-display text-[4.5rem] font-semibold leading-none text-gold/[0.07] group-hover:text-gold/[0.15] transition-colors duration-500 mb-6 -ml-1">
                {step.number}
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-cream mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-cream-muted font-light leading-[1.7] mt-auto">
                {step.description}
              </p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/0 group-hover:via-gold/40 group-hover:to-gold/0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
