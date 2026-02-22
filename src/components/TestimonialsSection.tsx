import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

interface Props {
  label?: string;
}

export default function TestimonialsSection({ label = "Testimonials" }: Props) {
  return (
    <section className="section-pad bg-charcoal-mid">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">{label}</span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
            What People Say
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-charcoal border border-border/40 p-8 md:p-10 hover:border-gold/15 transition-all duration-500 shadow-card"
            >
              <Quote size={20} className="text-gold/30 mb-6" />
              <blockquote className="font-sans text-sm text-cream-muted leading-[1.8] font-light mb-8 italic">
                "{t.quote}"
              </blockquote>
              <div className="pt-6 border-t border-border/40 flex items-center gap-4">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0">
                  <span className="font-display text-xs text-gold/50">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-sans text-xs text-cream font-medium">{t.name}</div>
                  <div className="font-sans text-[10px] text-cream-muted/60">
                    {t.role}{t.company ? ` — ${t.company}` : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
