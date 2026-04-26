import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DivisionLockup } from "@/components/brand/DivisionLockup";
import { Wordmark } from "@/components/brand/Wordmark";
import { PageHeader } from "@/components/brand/PageHeader";

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
};

export default function DivisionPage({ content }: { content: DivisionPageContent }) {
  const isInk = content.tone === "ink";

  return (
    <>
      <Breadcrumbs />

      {/* Hero lockup */}
      <section
        className={`pt-24 md:pt-32 pb-20 md:pb-28 ${
          isInk ? "bg-ink" : "bg-paper-warm"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="The Divisions"
            descriptor={`${content.division} — sub-brand identity`}
            tone={content.tone}
          />

          <div className="flex justify-center">
            <DivisionLockup
              division={content.division}
              subtitle={content.subtitle}
              tone={content.tone}
            />
          </div>
        </div>
      </section>

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
            <div className="space-y-6 font-sans text-base md:text-lg leading-[1.85] text-ink/75 font-light max-w-3xl">
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
