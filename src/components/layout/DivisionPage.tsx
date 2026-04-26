import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Wordmark } from "@/components/brand/Wordmark";
import { Ampersand } from "@/components/brand/Ampersand";
import { ArchitecturalFigure } from "@/components/brand/ArchitecturalFigure";

const PLATE_BY_DIVISION: Record<string, string> = {
  Capital: "I.",
  Development: "II.",
  Management: "III.",
};

const ARM_BY_DIVISION: Record<string, string> = {
  Capital: "The deal-making arm",
  Development: "The build arm",
  Management: "The operating arm",
};

export type DivisionPageContent = {
  division: "Capital" | "Development" | "Management";
  subtitle: string;
  /** Surface of the hero lockup block. */
  tone: "ink" | "paper";
  /** Large thesis statement introducing the division. */
  thesis: string;
  /** Supporting narrative paragraph(s). */
  narrative: string[];
  /** Focus areas / deal types / services list. */
  focusLabel: string;
  focusItems: string[];
  /** Head-of title & email. */
  head: {
    title: string;
    role: string;
    email: string;
  };
  /** Sister division callouts for the footer. */
  sisters: { division: string; href: string; tag: string }[];
  /** Optional architectural figure rendered between hero and narrative —
   *  the firm's evidence, photographed. */
  figure?: {
    src: string;
    alt: string;
    caption: string;
    context: string;
    plate?: string;
  };
};

export default function DivisionPage({ content }: { content: DivisionPageContent }) {
  const isInk = content.tone === "ink";
  const plate = PLATE_BY_DIVISION[content.division] ?? "";
  const arm = ARM_BY_DIVISION[content.division] ?? "";

  // Tone-aware classes — kept verbose so each line reads at a glance
  const t = {
    bg: isInk ? "bg-ink" : "bg-paper-warm",
    label: isInk ? "text-paper/55" : "text-ink/55",
    labelSoft: isInk ? "text-paper/40" : "text-ink/45",
    italic: isInk ? "text-paper/70" : "text-ink/70",
    italicSoft: isInk ? "text-paper/55" : "text-ink/55",
    rule: isInk ? "bg-paper/20" : "bg-ink/20",
    ruleSoft: isInk ? "bg-paper/12" : "bg-ink/12",
    brass: isInk ? "text-brass-light" : "text-brass",
    brassRule: isInk ? "bg-brass-light" : "bg-brass",
    title: isInk ? "text-paper" : "text-ink",
    body: isInk ? "text-paper/85" : "text-ink/85",
    parentMark: isInk ? "text-paper/65" : "text-ink/70",
  };

  return (
    <>
      <Breadcrumbs />

      {/* Hero — editorial chapter opener */}
      <section className={`relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden ${t.bg}`}>
        <div className="container mx-auto px-6 md:px-12">
          {/* Top meta strip */}
          <div className={`flex items-center justify-between font-sans text-[10px] tracking-[0.28em] uppercase ${t.label}`}>
            <span>The Divisions &middot; Sub-brand identity</span>
            <span className={`hidden md:inline font-serif italic tracking-normal normal-case text-[13px] ${t.italic}`}>
              Founding Document &middot; §{plate.toLowerCase().replace(".", "")}
            </span>
            <span>Plate {plate}</span>
          </div>
          <div className={`mt-4 h-px w-full ${t.rule}`} data-reveal-rule />

          {/* Main chapter spread */}
          <div className="mt-16 md:mt-24 grid grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
            {/* Left column — plate numeral + parent mark */}
            <div className="col-span-12 lg:col-span-3">
              <div
                className={`font-serif italic ${t.brass} leading-[0.85] tracking-tight text-[5.5rem] md:text-[6rem] lg:text-[8rem]`}
                aria-hidden
              >
                {plate}
              </div>
              <div className={`mt-10 md:mt-12 inline-flex items-baseline gap-[0.4em] font-serif tracking-wordmark uppercase text-[11px] md:text-xs ${t.parentMark}`}>
                <span>Thane</span>
                <Ampersand className="text-[11px] md:text-xs" />
                <span>Reeve</span>
              </div>
              <p className={`mt-2 font-serif italic text-sm ${t.italicSoft}`}>
                The parent firm
              </p>
            </div>

            {/* Center column — division wordmark + descriptor */}
            <div className="col-span-12 lg:col-span-6">
              <h1
                className={`font-serif font-normal tracking-tight leading-[0.92] text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] ${t.title}`}
              >
                {content.division}
              </h1>
              <div className={`mt-8 h-px w-24 md:w-28 ${t.brassRule}`} />
              <p className={`mt-8 font-serif italic text-xl md:text-2xl lg:text-[1.7rem] leading-[1.35] max-w-xl ${t.body}`}>
                {content.subtitle}
              </p>
            </div>

            {/* Right column — marginalia */}
            <div className="col-span-12 lg:col-span-3">
              <div className="lg:pl-8 relative">
                <div
                  aria-hidden
                  className={`hidden lg:block absolute top-1 left-0 w-px h-12 ${t.brassRule}`}
                />
                <p className={`font-sans text-[10px] tracking-[0.32em] uppercase mb-3 ${t.label}`}>
                  Sub-brand identity
                </p>
                <p className={`font-serif italic text-base md:text-lg ${t.brass} leading-snug mb-8`}>
                  {arm}
                </p>
                <p className={`font-serif text-base md:text-lg ${t.body} leading-[1.55] mb-6`}>
                  Held under one accountable roof with{" "}
                  <em className={`not-italic font-serif italic ${t.brass}`}>
                    {content.sisters[0].division}
                  </em>{" "}
                  and{" "}
                  <em className={`not-italic font-serif italic ${t.brass}`}>
                    {content.sisters[1].division}.
                  </em>
                </p>
                <div className={`h-px w-full ${t.ruleSoft} mb-6`} />
                <p className={`font-serif italic text-sm ${t.italicSoft} leading-relaxed`}>
                  Boston &middot; NYC corridor
                  <br />
                  Established MMXXVI
                </p>
              </div>
            </div>
          </div>

          {/* Bottom meta strip */}
          <div className={`mt-16 md:mt-24 h-px w-full ${t.ruleSoft}`} data-reveal-rule />
          <div className={`mt-5 flex items-center justify-between font-sans text-[10px] tracking-[0.28em] uppercase ${t.labelSoft}`}>
            <span>Thane &amp; Reeve {content.division}</span>
            <span className={`hidden md:inline font-serif italic tracking-normal normal-case text-sm ${t.italicSoft}`}>
              Three disciplines &middot; one balance sheet
            </span>
            <a
              href={`mailto:${content.head.email}`}
              className={`hover:${t.brass} transition-colors`}
            >
              {content.head.email}
            </a>
          </div>
        </div>
      </section>

      {/* Architectural figure — the firm's evidence, photographed */}
      {content.figure && (
        <ArchitecturalFigure
          src={content.figure.src}
          alt={content.figure.alt}
          caption={content.figure.caption}
          context={content.figure.context}
          plate={content.figure.plate}
        />
      )}

      {/* Thesis + narrative */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              {content.division === "Capital"
                ? "The deal-making arm"
                : content.division === "Development"
                ? "The build arm"
                : "The operating arm"}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ink tracking-tight mb-10">
              {content.thesis}
            </h2>
            <div className="space-y-6 font-serif text-lg md:text-xl leading-[1.7] text-ink/85 max-w-3xl">
              {content.narrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Focus list */}
            <div className="mt-14 border-t border-ink/15 pt-10">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-6">
                {content.focusLabel}
              </p>
              <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 font-serif italic text-base md:text-lg text-ink/80">
                {content.focusItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brass mt-1.5 select-none" aria-hidden>
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Head of */}
            <div className="mt-14 border-t border-ink/15 pt-10 grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55 mb-2">
                  Head of
                </p>
                <p className="font-serif italic text-ink/85 text-lg">
                  {content.head.title}
                  {", "}
                  <span className="not-italic text-ink/60">{content.head.role}</span>
                </p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55 mb-2">
                  Direct line
                </p>
                <a
                  href={`mailto:${content.head.email}`}
                  className="font-serif italic text-ink/85 text-lg hover:text-brass transition-colors"
                >
                  {content.head.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sister divisions */}
      <section className="bg-paper-warm py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
                The other divisions
              </p>
              <p className="font-serif italic text-sm text-ink/60 max-w-sm text-right">
                No division operates alone.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {content.sisters.map((sister) => (
                <Link
                  key={sister.href}
                  to={sister.href}
                  className="group bg-paper p-8 md:p-10 hover:bg-paper-warm transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brass">
                      {sister.tag}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-ink/30 group-hover:text-brass group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink tracking-tight mb-2">
                    Thane &amp; Reeve{" "}
                    <span className="text-brass italic">{sister.division}</span>
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer wordmark seal */}
      <section className="bg-ink py-14">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <Wordmark size="sm" tone="paper" withTagline />
        </div>
      </section>
    </>
  );
}
