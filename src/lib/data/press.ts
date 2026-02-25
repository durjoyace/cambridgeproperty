export interface PressItem {
  headline: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
  category: "Development" | "Community" | "Policy" | "Finance";
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  sources?: { label: string; url: string }[];
}

export const pressItems: PressItem[] = [
  {
    headline:
      "Nauset Completes 907 Main Boutique Hotel in Central Square",
    source: "Boston Real Estate Times",
    date: "2020-09-23",
    url: "https://bostonrealestatetimes.com/nauset-completes-907-main-boutique-hotel-in-central-square/",
    excerpt:
      'Patrick Barrett developed a 67-key boutique luxury hotel in Cambridge\'s Central Square — a $45 million project designed by Gensler Boston with LEED-certifiable standards. "This is my love letter to Central Square."',
    category: "Development",
  },
  {
    headline:
      "GenX Capital & CSCREF Close $37.75MM with NY Hedge Fund for Cambridge Hotel",
    source: "Newswire",
    date: "2019-06-18",
    url: "https://www.newswire.com/news/genx-capital-cscref-close-37-75mm-with-ny-hedge-fund-for-cambridge-20926774",
    excerpt:
      "Patrick Barrett III and Timothy Johnson secured $37.75 million in construction financing for the 907 Main Hotel — a 42,000 sq ft, 67-room boutique hotel near MIT in Cambridge's Central Square.",
    category: "Finance",
  },
  {
    headline:
      "How a Cambridge Developer's Lawsuit Could Unravel an Affordable Housing Policy",
    source: "WBUR (NPR Boston)",
    date: "2026-01-29",
    url: "https://www.wbur.org/upnext/2026/01/29/massachusetts-inclusionary-zoning-laws-barrett-land-court",
    excerpt:
      "Patrick Barrett, a Cambridge developer with 20 years of experience, filed a constitutional challenge to Cambridge's inclusionary zoning requirement — grounded in the unanimous Supreme Court decision Sheetz v. El Dorado (2024).",
    category: "Policy",
  },
  {
    headline:
      "New Lawsuit Challenges Cambridge Zoning Ordinance",
    source: "Mass Lawyers Weekly",
    date: "2025-12-03",
    url: "https://masslawyersweekly.com/2025/12/03/new-lawsuit-challenges-cambridge-zoning-ordinance/",
    excerpt:
      '"We recognize the importance of building affordable housing. But the cost should be shared equally by the community as a whole." — Paul Johnson, Pioneer Legal Foundation, representing Patrick Barrett.',
    category: "Policy",
  },
  {
    headline:
      "Inclusionary Zoning in the Legal Firing Line as Senate Tries to Boost Policy",
    source: "Commonwealth Beacon",
    date: "2026-01-08",
    url: "https://commonwealthbeacon.org/housing/inclusionary-zoning-in-the-legal-firing-line-as-senate-tries-to-boost-policy/",
    excerpt:
      "Barrett's challenge — filed by the Pioneer Legal Foundation — catalyzed statewide policy debate, with even pro-housing YIMBY organizations acknowledging concerns about Cambridge's specific implementation.",
    category: "Policy",
  },
  {
    headline:
      "AG Defends Zoning Laws in Barrett Case",
    source: "Cambridge Day",
    date: "2026-02-24",
    url: "https://www.cambridgeday.com/2026/02/24/ag-defends-zoning-laws/",
    excerpt:
      "Massachusetts Attorney General Andrea Campbell moved to intervene in Barrett's inclusionary zoning challenge — signaling the case's statewide constitutional significance for 141+ communities.",
    category: "Policy",
  },
  {
    headline: "Central Square Hotel Gets New Management",
    source: "Cambridge Day",
    date: "2025-11-13",
    url: "https://www.cambridgeday.com/2025/11/13/central-square-hotel-gets-new-management-that-is-expected-to-reopen-doors-within-weeks/",
    excerpt:
      "The 907 Main hotel in Central Square — originally developed by Patrick Barrett — receives new management and prepares to reopen.",
    category: "Development",
  },
];

export const publicRecord: MilestoneItem[] = [
  {
    year: "2010",
    title: "First Cambridge Acquisitions",
    description:
      "Patrick Barrett and Tim Johnson begin acquiring residential properties in Cambridge, establishing the foundation for what becomes Barrett & Johnson.",
  },
  {
    year: "2015–2019",
    title: "907 Main Street Hotel Development",
    description:
      "Barrett develops a 67-key boutique luxury hotel in Central Square — a $45 million project with $37.75M in institutional financing, designed by Gensler Boston to LEED-certifiable standards.",
    sources: [
      {
        label: "Boston Real Estate Times",
        url: "https://bostonrealestatetimes.com/nauset-completes-907-main-boutique-hotel-in-central-square/",
      },
      {
        label: "Newswire — $37.75M Financing",
        url: "https://www.newswire.com/news/genx-capital-cscref-close-37-75mm-with-ny-hedge-fund-for-cambridge-20926774",
      },
    ],
  },
  {
    year: "2019",
    title: "Central Square BID Board Member & Treasurer",
    description:
      "Barrett joins the board of the Central Square Business Improvement District (501c3, ~$3M annual budget), where he currently serves as Treasurer.",
    sources: [
      { label: "Central Square BID", url: "https://www.centralsq.org/about" },
      {
        label: "ProPublica Nonprofit Explorer",
        url: "https://projects.propublica.org/nonprofits/organizations/842076384",
      },
    ],
  },
  {
    year: "2022",
    title: "75-Door Portfolio Stabilization",
    description:
      "Barrett & Johnson reaches full stabilization across 75 doors — 63 residential and 12 retail — with 100% owner-operated management on AppFolio.",
  },
  {
    year: "2025",
    title: "Columbia Street Inclusionary Zoning Challenge",
    description:
      'Barrett files a constitutional challenge to Cambridge\'s 20% inclusionary zoning requirement via the Pioneer Legal Foundation — grounded in the unanimous 9-0 Supreme Court decision Sheetz v. El Dorado (2024). The case involves a planned $57M, 89,500 GSF residential condominium development on Columbia Street. Barrett told WBUR inclusionary zoning is a "great tool" — his challenge is to the implementation, not the policy itself.',
    sources: [
      {
        label: "WBUR (NPR)",
        url: "https://www.wbur.org/upnext/2026/01/29/massachusetts-inclusionary-zoning-laws-barrett-land-court",
      },
      {
        label: "Mass Lawyers Weekly",
        url: "https://masslawyersweekly.com/2025/12/03/new-lawsuit-challenges-cambridge-zoning-ordinance/",
      },
      {
        label: "Commonwealth Beacon",
        url: "https://commonwealthbeacon.org/housing/inclusionary-zoning-in-the-legal-firing-line-as-senate-tries-to-boost-policy/",
      },
    ],
  },
  {
    year: "2026",
    title: "Attorney General Intervenes — Statewide Significance",
    description:
      "Massachusetts AG Andrea Campbell moves to intervene in Barrett's case, recognizing its constitutional implications for 141+ communities across the state. The case is pending in Massachusetts Land Court.",
    sources: [
      {
        label: "Cambridge Day",
        url: "https://www.cambridgeday.com/2026/02/24/ag-defends-zoning-laws/",
      },
    ],
  },
];

export const categoryColors: Record<PressItem["category"], string> = {
  Development: "border-gold/40 text-gold",
  Community: "border-emerald-500/40 text-emerald-400",
  Policy: "border-blue-400/40 text-blue-400",
  Finance: "border-amber-400/40 text-amber-300",
};
