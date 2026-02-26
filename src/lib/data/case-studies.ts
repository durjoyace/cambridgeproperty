export interface PerformanceMetric {
  label: string;
  value: string;
  context?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  units: number;
  assetType: string;
  strategy: string;
  status: "Active" | "Stabilized" | "In Development";
  statusDetail?: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  performanceSnapshot?: PerformanceMetric[];
  image?: string;
  // Extended fields for property detail pages
  fullDescription?: string;
  timeline?: { date: string; event: string }[];
  detailMetrics?: { label: string; value: string }[];
  neighborhood?: string;
  videoUrl?: string; // YouTube or Vimeo embed URL
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "907-main-hotel",
    title: "907 Main — The Lark Cambridge",
    location: "Cambridge, MA",
    units: 67,
    assetType: "Boutique Hotel",
    strategy: "Ground-Up Development",
    status: "Stabilized",
    statusDetail: "Completed Development",
    image: "907-main",
    description:
      "Ground-up development of a 67-key boutique luxury hotel in Central Square — a $45M project designed by Gensler Boston with LEED-certifiable standards. Secured $37.75M institutional financing. Now operating as The Lark Cambridge.",
    highlights: [
      "$45M total development cost — 42,000 SF, 67 keys",
      "$37.75M institutional financing from NY hedge fund",
      "Designed by Gensler Boston — LEED-certifiable standards",
      "CSAC enthusiastic approval, CDD approved",
      "Commitment to hire 20% of employees from The Port neighborhood",
    ],
    metrics: [
      { label: "Keys", value: "67" },
      { label: "Asset Type", value: "Boutique Hotel" },
      { label: "Strategy", value: "Ground-Up" },
      { label: "Architect", value: "Gensler" },
    ],
    performanceSnapshot: [
      { label: "Total Development", value: "$45M", context: "42,000 SF, 67 keys" },
      { label: "Institutional Financing", value: "$37.75M", context: "NY hedge fund, closed 2019" },
      { label: "Community Approval", value: "Unanimous", context: "CSAC enthusiastic support" },
    ],
    neighborhood: "Central Square",
    fullDescription:
      "907 Main Street is a 67-key boutique luxury hotel in the heart of Cambridge's Central Square — the marquee project in Barrett & Johnson's development portfolio. Patrick Barrett conceived and developed the project from the ground up over a 4-year period, navigating Cambridge's complex zoning and entitlement process, securing $37.75M in institutional construction financing from a New York hedge fund, and overseeing design by Gensler Boston to LEED-certifiable standards. The Central Square Advisory Committee gave the project its enthusiastic support, and CDD approved it as meeting the overall goals of the Central Square Action Plan. Barrett called the hotel his \"love letter to Central Square.\" The property included a commitment to hire 20% of employees from The Port neighborhood. Originally operated by Sonder, the hotel is now managed as The Lark Cambridge.",
    timeline: [
      { date: "2016", event: "Project conception — Barrett presents to Central Square Advisory Committee" },
      { date: "2017", event: "CSAC enthusiastic approval — CDD confirms alignment with Central Square Action Plan" },
      { date: "2019", event: "$37.75M construction financing closed with NY hedge fund (GenX Capital & CSCREF)" },
      { date: "2020", event: "Construction completed — 42,000 SF, 67-key boutique hotel opens" },
      { date: "2020–2024", event: "Operated by Sonder as Sonder 907 Main" },
      { date: "2025", event: "Rebranded as The Lark Cambridge under new management" },
    ],
    detailMetrics: [
      { label: "Keys", value: "67" },
      { label: "Building Size", value: "42,000 SF" },
      { label: "Total Development", value: "$45M" },
      { label: "Neighborhood", value: "Central Square" },
      { label: "Architect", value: "Gensler Boston" },
      { label: "Status", value: "Operating — The Lark Cambridge" },
    ],
  },
  {
    slug: "17-story-street",
    title: "17 Story Street — Harriet Jacobs House",
    location: "Cambridge, MA",
    units: 50,
    assetType: "Hotel + Residential",
    strategy: "Historic Preservation + Development",
    status: "In Development",
    statusDetail: "CHC Approved 7-0",
    image: "building-2",
    description:
      "Preservation of the historic Harriet Jacobs House — an African American heritage site — combined with a new hotel and 50+ homes including 10 affordable units. Five years of community engagement with the Jacobs Legacy Committee, Harvard Square Business Association, and Cambridge residents. Designed by Cambridge Seven.",
    highlights: [
      "Historic preservation of Harriet Jacobs House (African American heritage site)",
      "50+ new homes including 10 affordable units",
      "Hotel component in Harvard Square",
      "Cambridge Historical Commission approved 7-0 unanimous",
      "5+ years of community engagement and Legacy Committee collaboration",
    ],
    metrics: [
      { label: "Homes", value: "50+" },
      { label: "Asset Type", value: "Hotel + Residential" },
      { label: "Strategy", value: "Preservation + Dev" },
      { label: "Architect", value: "Cambridge Seven" },
    ],
    performanceSnapshot: [
      { label: "New Homes", value: "50+", context: "Including 10 affordable" },
      { label: "CHC Approval", value: "7-0", context: "Unanimous, September 2025" },
      { label: "Community Process", value: "5+ Years", context: "Legacy Committee, HSBA" },
    ],
    neighborhood: "Harvard Square",
    fullDescription:
      "17 Story Street represents Barrett & Johnson's commitment to development that honors Cambridge's history while addressing its housing needs. The project preserves the Harriet Jacobs House — a significant African American heritage site where Harriet Jacobs, after publishing her landmark autobiography 'Incidents in the Life of a Slave Girl,' operated boarding houses for Harvard faculty. Barrett spent over five years working with the city, the Jacobs Legacy Committee, and Cambridge residents to design a project that preserves the historic structure while constructing a hotel and at least 50 new homes, 10 of which will be affordable. The project received unanimous 7-0 approval from the Cambridge Historical Commission, with support from the Harvard Square Business Association and multiple city councillors. Designed by Cambridge Seven, the project reflects Barrett's approach: deep community engagement, historic sensitivity, and long-term investment in Cambridge's neighborhoods.",
    timeline: [
      { date: "~2020", event: "Barrett begins engagement with Jacobs Legacy Committee and city officials" },
      { date: "2020–2024", event: "Five years of community meetings, design iterations, and historic preservation planning" },
      { date: "2025", event: "Cambridge Historical Commission hearing — approved in principle, 7-0 unanimous" },
      { date: "2025", event: "Harvard Square Business Association and city councillors testify in support" },
      { date: "2026+", event: "In development — entitlements and construction planning" },
    ],
    detailMetrics: [
      { label: "New Homes", value: "50+ (10 Affordable)" },
      { label: "Historic Preservation", value: "Harriet Jacobs House" },
      { label: "Hotel", value: "Harvard Square" },
      { label: "Neighborhood", value: "Harvard Square" },
      { label: "Architect", value: "Cambridge Seven" },
      { label: "Status", value: "In Development — CHC Approved 7-0" },
    ],
  },
];
