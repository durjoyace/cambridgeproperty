export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  units: number;
  assetType: string;
  strategy: string;
  status: "Active" | "Stabilized" | "In Development";
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  image?: string;
  // Extended fields for property detail pages
  fullDescription?: string;
  timeline?: { date: string; event: string }[];
  detailMetrics?: { label: string; value: string }[];
  neighborhood?: string;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cambridge-24-unit",
    title: "Class B Multifamily Value-Add",
    location: "Cambridge, MA",
    units: 24,
    assetType: "Multifamily (Residential)",
    strategy: "Value-Add",
    status: "Active",
    description:
      "Acquisition and repositioning of a 24-unit Class B residential asset in Cambridge. Focused on operational efficiency improvements and targeted capital expenditures to drive NOI growth while maintaining tenant satisfaction.",
    highlights: [
      "Enterprise-grade AppFolio property management implementation",
      "Targeted unit renovation program to capture rental upside",
      "Operational cost reduction through vendor consolidation",
      "Proactive tenant relations reducing turnover",
    ],
    metrics: [
      { label: "Units", value: "24" },
      { label: "Asset Class", value: "Class B Residential" },
      { label: "Strategy", value: "Value-Add" },
      { label: "Management", value: "AppFolio" },
    ],
    neighborhood: "East Cambridge",
    fullDescription:
      "This 24-unit Class B residential asset in East Cambridge was acquired as a value-add opportunity with significant operational upside. The previous owner had self-managed the property for over a decade, resulting in below-market rents, deferred maintenance, and no institutional systems. Barrett & Johnson's thesis centered on implementing enterprise-grade property management (AppFolio), executing a targeted unit renovation program during natural turnover, and reducing operating costs through vendor consolidation. The property benefits from excellent proximity to Kendall Square, the Red Line, and Cambridge's biotech corridor — fundamentals that support long-term rent growth and tenant demand.",
    timeline: [
      { date: "Q3 2022", event: "Acquisition closed — off-market deal sourced directly from retiring owner" },
      { date: "Q4 2022", event: "AppFolio implementation and full operational transition" },
      { date: "Q1 2023", event: "Vendor audit and consolidation — 22% reduction in maintenance costs" },
      { date: "Q2 2023", event: "First phase of unit renovations (6 units) during natural turnover" },
      { date: "Q4 2023", event: "Rent roll stabilized at 18% above acquisition basis" },
      { date: "2024", event: "Continued renovation program — 4 additional units completed" },
    ],
    detailMetrics: [
      { label: "Units", value: "24" },
      { label: "Asset Class", value: "Class B Residential" },
      { label: "Strategy", value: "Value-Add" },
      { label: "Neighborhood", value: "East Cambridge" },
      { label: "Management", value: "AppFolio Enterprise" },
      { label: "Status", value: "Active — Ongoing Renovation" },
    ],
  },
  {
    slug: "somerville-mixed-use",
    title: "Mixed-Use Stabilization",
    location: "Somerville, MA",
    units: 18,
    assetType: "Mixed-Use (Res + Retail)",
    strategy: "Stabilization",
    status: "Active",
    description:
      "Stabilization of an 18-unit mixed-use asset comprising residential and ground-floor retail in Somerville. Strategy centered on strengthening the commercial tenant base while repositioning residential floorplans for the local market.",
    highlights: [
      "Commercial tenant base stabilization and lease restructuring",
      "Residential unit repositioning for market alignment",
      "63 residential and 12 retail doors under unified management",
      "Integrated residential-retail operations platform",
    ],
    metrics: [
      { label: "Units", value: "18" },
      { label: "Asset Class", value: "Res + Retail" },
      { label: "Strategy", value: "Stabilization" },
      { label: "Retail Doors", value: "12" },
    ],
    neighborhood: "Davis Square Area",
    fullDescription:
      "This 18-unit mixed-use asset in Somerville combines residential units with ground-floor retail — a configuration that requires specialized management expertise to optimize both tenant types. Barrett & Johnson acquired the property during a period of commercial tenant instability, with two of three retail spaces vacant and residential rents significantly below market. The stabilization strategy focused on restructuring commercial leases to attract quality retail tenants, repositioning residential floorplans for the Davis Square market, and integrating both operations under a unified AppFolio platform. The property now operates with full commercial occupancy and residential rents aligned to the local market.",
    timeline: [
      { date: "Q1 2021", event: "Acquisition — 2 of 3 retail spaces vacant, residential rents 25% below market" },
      { date: "Q2 2021", event: "Commercial lease restructuring — new terms to attract quality retail tenants" },
      { date: "Q3 2021", event: "First retail tenant secured — local café on 5-year NNN lease" },
      { date: "Q1 2022", event: "Second retail space leased — professional services firm" },
      { date: "Q2 2022", event: "Residential repositioning — common area upgrades and unit refresh program" },
      { date: "Q4 2022", event: "Full stabilization achieved — 100% commercial and 96% residential occupancy" },
    ],
    detailMetrics: [
      { label: "Units", value: "18 (Res + Retail)" },
      { label: "Residential", value: "63 Doors" },
      { label: "Retail", value: "12 Doors" },
      { label: "Neighborhood", value: "Davis Square Area" },
      { label: "Management", value: "AppFolio Enterprise" },
      { label: "Status", value: "Stabilized" },
    ],
  },
];
