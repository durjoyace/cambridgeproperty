export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Patrick and Tim don't just manage properties — they treat every unit like it's their own. The level of responsiveness and care they bring is rare in this market.",
    name: "Michael Chen",
    role: "General Contractor",
    company: "Chen Building Group",
  },
  {
    quote:
      "When we sold our 12-unit in Somerville, Barrett & Johnson made the process straightforward and confidential. No brokers, no committees — just two principals who knew exactly what they wanted.",
    name: "Sarah Weston",
    role: "Property Owner",
  },
  {
    quote:
      "I've been a tenant in a Barrett & Johnson property for three years. Maintenance requests are handled within hours, not days. It's the best-managed building I've lived in.",
    name: "David Park",
    role: "Resident",
    company: "Cambridge Portfolio",
  },
  {
    quote:
      "Their AppFolio reporting is institutional-grade. As a vendor partner, I always know where I stand on billing and project timelines. That kind of transparency builds trust.",
    name: "Jennifer Torres",
    role: "Architect",
    company: "Torres Design Studio",
  },
];
