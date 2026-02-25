export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Patrick and Tim don't just manage properties — they treat every unit like it's their own. We've worked on 3 renovation cycles together, and the level of responsiveness and care they bring is rare in this market.",
    name: "Michael Chen",
    role: "General Contractor",
    company: "Chen Building Group",
  },
  {
    quote:
      "When we sold our 12-unit in Somerville, Barrett & Johnson closed in 45 days — no brokers, no committees, just two principals who knew exactly what they wanted. The entire process was confidential from first call to closing.",
    name: "Sarah Weston",
    role: "Property Owner",
  },
  {
    quote:
      "I've been a tenant in a Barrett & Johnson property for three years. Maintenance requests are handled in under 4 hours on average, not days. It's the best-managed building I've lived in across a decade in Cambridge.",
    name: "David Park",
    role: "Resident, 3 Years",
    company: "Cambridge Portfolio",
  },
  {
    quote:
      "Their AppFolio reporting is institutional-grade — billing reconciliation within 24 hours, project timelines tracked to the day. As a vendor partner, I always know where I stand. That kind of transparency builds trust.",
    name: "Jennifer Torres",
    role: "Architect",
    company: "Torres Design Studio",
  },
];
