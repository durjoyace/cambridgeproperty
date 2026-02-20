const steps = [
  {
    number: "01",
    title: "Confidential Submission",
    description:
      "Owner submits property details through our secure portal. All information bypasses public markets and is encrypted in transit.",
  },
  {
    number: "02",
    title: "Principal Review",
    description:
      "Our acquisition principals review every submission within 48 hours. No junior staff, no broker intermediaries — direct access.",
  },
  {
    number: "03",
    title: "Offer & Structure",
    description:
      "We present a structured offer — fee-simple or joint venture — aligned with the owner's goals and timeline.",
  },
  {
    number: "04",
    title: "Seamless Transition",
    description:
      "Post-acquisition, our enterprise-grade AppFolio management infrastructure ensures an operationally seamless transition for every asset.",
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
                Our Process
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              How We Work
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-cream-muted font-light lg:self-end">
            Our process is designed for sophisticated sellers seeking certainty of execution without broad market exposure. Every step is built around discretion, speed, and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <div key={i} className="bg-charcoal p-8 flex flex-col group hover:bg-charcoal-mid transition-colors duration-300">
              <div className="font-display text-5xl font-semibold text-gold/20 group-hover:text-gold/30 transition-colors duration-300 mb-5 leading-none">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-cream mb-3 leading-snug">
                {step.title}
              </h3>
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
