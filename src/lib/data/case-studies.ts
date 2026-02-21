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
  },
];
