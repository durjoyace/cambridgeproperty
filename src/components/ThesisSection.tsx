import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Thesis section — the pitch-deck "Our thesis, in one sentence."
 * Rendered as an editorial page: roman numeral rule, eyebrow, serif
 * thesis with brass accents, short substantiating paragraph.
 */
export default function ThesisSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="thesis" className="relative bg-paper py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header rule */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <span className="font-serif italic text-2xl md:text-3xl text-brass">II</span>
            <div className="text-right font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
              <div>Thesis</div>
              <div className="font-serif italic tracking-normal normal-case text-[13px] mt-1 text-ink/65">
                Our thesis, in one sentence
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-ink/20" />
        </div>

        {/* The thesis */}
        <div className="max-w-5xl mx-auto mt-16" data-reveal>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-8">
            Our Thesis, in One Sentence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-ink max-w-4xl">
            The best real estate returns come from firms that refuse to separate{" "}
            <em className="text-brass not-italic font-serif italic">ownership</em>{" "}
            from{" "}
            <em className="text-brass not-italic font-serif italic">operations</em>{" "}
            — and we are building the firm that holds both.
          </h2>
        </div>

        {/* Substantiation */}
        <div className="max-w-3xl mx-auto mt-14 lg:ml-[8.5rem] xl:ml-[12rem]" data-reveal>
          <p className="font-sans text-base md:text-lg leading-[1.8] text-ink/70 font-light">
            Most of the industry is structured around specialization: capital allocators
            who don't operate, developers who don't hold, managers who don't own. Thane
            &amp; Reeve is deliberately vertical, deliberately flexible, and deliberately
            small.
          </p>
        </div>
      </div>
    </section>
  );
}
