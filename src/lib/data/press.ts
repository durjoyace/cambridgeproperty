export interface PressItem {
  headline: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
  category: "Development" | "Community" | "Policy" | "Finance" | "Zoning";
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  approval?: string;
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
      'Patrick Barrett, a Cambridge developer with 20 years of experience, filed a constitutional challenge to Cambridge\'s inclusionary zoning requirement — grounded in the unanimous Supreme Court decision Sheetz v. El Dorado (2024). Barrett called inclusionary zoning a "great tool" — his challenge is to the implementation.',
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
      "Barrett's challenge catalyzed statewide policy debate, with even pro-housing YIMBY organizations acknowledging concerns about Cambridge's specific implementation of inclusionary zoning.",
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
    year: "2015",
    title: "Community Advocacy — 209 Broadway",
    description:
      'Barrett testifies before the Board of Zoning Appeal in support of a neighbor\'s residential development project, speaking as "an attorney" and local property owner at 234 Broadway who organized a neighborhood meeting where "no one had any particular issue with this project."',
    sources: [
      {
        label: "BZA Minutes — July 30, 2015",
        url: "https://www.cambridgema.gov/publications/detail.aspx?path=/sitecore/content/home/inspection/Zoning/boardofzoningappeal/bzameetingminutes/2015/07/bzaminutes20150730",
      },
    ],
  },
  {
    year: "2016–2020",
    title: "907 Main Street Hotel — $45M Development",
    description:
      'Barrett develops a 67-key boutique luxury hotel in Central Square — $45M total development, $37.75M institutional financing from a NY hedge fund, designed by Gensler Boston with LEED-certifiable standards. The Central Square Advisory Committee "enthusiastically supports the proposed project." CDD approved, noting it "meets the overall goals of the Central Square Action Plan." Included commitment to hire 20% of employees from the Port neighborhood.',
    approval: "CSAC: Enthusiastic support. CDD: Approved.",
    sources: [
      {
        label: "Boston Real Estate Times",
        url: "https://bostonrealestatetimes.com/nauset-completes-907-main-boutique-hotel-in-central-square/",
      },
      {
        label: "Newswire — $37.75M Financing",
        url: "https://www.newswire.com/news/genx-capital-cscref-close-37-75mm-with-ny-hedge-fund-for-cambridge-20926774",
      },
      {
        label: "CSAC Report — March 2016",
        url: "https://www.cambridgema.gov/-/media/Files/CDD/ZoningDevel/CentralAdvComm/csac_20160323_907mainst.pdf",
      },
      {
        label: "CSAC Report — January 2017",
        url: "https://www.cambridgema.gov/-/media/Files/CDD/ZoningDevel/CentralAdvComm/csac_20170104_907mainst_report.pdf",
      },
    ],
  },
  {
    year: "2017",
    title: "Central Square Overlay Zoning Amendments",
    description:
      'Barrett authored zoning amendments to the Central Square Overlay District, adopted by the Cambridge City Council. Referenced in his own later BZA testimony: "I rewrote part of the zoning for the Overlay."',
  },
  {
    year: "2019",
    title: "115 Spring Street — Cultural Venue Approval",
    description:
      "Barrett represented a petitioner seeking to revive a theater/performance venue in Central Square. The Central Square BID Executive Director testified in support, and the Cambridge Arts Council expressed favor.",
    approval: "BZA: Variance granted, 5-0 unanimous.",
    sources: [
      {
        label: "BZA Minutes — August 15, 2019",
        url: "https://www.cambridgema.gov/publications/detail.aspx?path=/sitecore/content/home/inspection/Zoning/boardofzoningappeal/bzameetingminutes/2019/08/bzaminutes20190815",
      },
    ],
  },
  {
    year: "2019",
    title: "Central Square BID — Board Member & Treasurer",
    description:
      "Barrett joins the board of the Central Square Business Improvement District (501c3, ~$3M annual budget), where he currently serves as Treasurer. The BID serves Central Square through placemaking, public safety ambassadors, and community programming.",
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
    title: "The Middle East — Cultural Preservation & Redevelopment",
    description:
      'Barrett works with the Sater family to reimagine the iconic Middle East music venue complex (2-10 Brookline St / 468-480 Mass Ave) as a mixed-use building with a hotel and three preserved live music venues. Engaged MIT sound engineers on noise attenuation, the Cambridge Arts Council on a new mural commission, and designed for 2070 flood plain climate resilience. Multiple community members testified in support, including praise that "Mr. Barrett\'s project at 907 Main Street had been done well."',
    approval: "CHC: Favorable continuance, 5-0 unanimous.",
    sources: [
      {
        label: "CHC Staff Memo — Case D-1631",
        url: "https://www.cambridgema.gov/-/media/Files/historicalcommission/pdf/chcmeetingfiles/D1631_memo.pdf",
      },
      {
        label: "CHC Minutes — October 6, 2022",
        url: "https://www.cambridgema.gov/-/media/Files/historicalcommission/pdf/chcmeetingfiles/Minutes_CHC/10062022draftminutes.pdf",
      },
    ],
  },
  {
    year: "2022",
    title: "BA-5 Zoning Petition — 2400 Mass Ave Housing",
    description:
      'Barrett authored a zoning amendment petition to create a new BA-5 district at 2400-2418 Mass Ave for mixed-use housing — increasing FAR to 4.0 for residential while respecting neighborhood character. Barrett wrote: "This petition attempts to address the issues of housing and mixed-use development in a way that does not upend the character of an existing neighborhood but recognizes the need for citywide participation in our housing goals." Included massing studies by MERGE Architects and community meetings with the North Cambridge Stabilization Committee.',
    sources: [
      {
        label: "Barrett BA-5 Petitioner Memo",
        url: "https://www.cambridgema.gov/-/media/Files/CDD/ZoningDevel/Amendments/2022/barrettetal/zngamend_barrettBA5_petitionermemo_20221214.pdf",
      },
      {
        label: "CRA — 2400 Mass Ave Project",
        url: "https://www.cambridgeredevelopment.org/projects/2400-mass-ave",
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
    title: "17 Story Street — Harriet Jacobs House Preservation",
    description:
      'Barrett represents a project to preserve the historic Harriet Jacobs House (an African American heritage site where Jacobs operated boarding houses for Harvard faculty after publishing her autobiography) while constructing a hotel and residential building providing at least 50 new homes, 10 affordable. Barrett described "over five years of work with the city, the Legacy Committee, and various Cambridge people." Supported by the Jacobs Legacy Committee, Harvard Square Business Association, and multiple city councillors. Architect: Cambridge Seven.',
    approval: "CHC: Approved in principle, 7-0 unanimous.",
    sources: [
      {
        label: "CHC Minutes — September 4, 2025",
        url: "https://www.cambridgema.gov/historic/Publications/detail.aspx?path=/sitecore/content/home/historic/Publications/Minutes/CHC/2025/september4",
      },
      {
        label: "Harvard Crimson — Harriet Jacobs Legacy",
        url: "https://www.thecrimson.com/article/2024/11/22/harriet-jacobs-house-cambridge-legacy/",
      },
      {
        label: "Harvard Square — Public Meeting Notice",
        url: "https://harvardsquare.com/uncategorized/harvard-square-restoration-and-development-project-17-story-street-notice-of-public-meeting/",
      },
    ],
  },
  {
    year: "2025",
    title: "124-132 Western Avenue — New Residential Building",
    description:
      "Barrett represented DND Homes and the Spears family for a new residential building on Western Avenue, replacing a former funeral home. Barrett hosted two community meetings with neighbors. Architect: Anderson Porter Design.",
    approval: "CHC: Cleared for construction, 6-1.",
    sources: [
      {
        label: "CHC Minutes — September 4, 2025",
        url: "https://www.cambridgema.gov/historic/Publications/detail.aspx?path=/sitecore/content/home/historic/Publications/Minutes/CHC/2025/september4",
      },
    ],
  },
  {
    year: "2025",
    title: "Columbia Street — Inclusionary Zoning Constitutional Challenge",
    description:
      'Barrett files a constitutional challenge to Cambridge\'s 20% inclusionary zoning requirement via the Pioneer Legal Foundation — grounded in the unanimous 9-0 Supreme Court decision Sheetz v. El Dorado (2024). The case involves a planned $57M, 89,500 GSF residential condominium development on Columbia Street with ~20 existing rental units across 5 buildings. Barrett told WBUR inclusionary zoning is a "great tool" — his challenge is to the implementation, not the policy itself. Covered by WBUR, Commonwealth Beacon, Mass Lawyers Weekly, Cambridge Day, and Harvard Crimson.',
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
      {
        label: "Pioneer Legal — Complaint",
        url: "https://pioneerlegal.org/wp-content/uploads/Columbia-St-LLC-Complaint-with-Ex.-A-final-12.2.25-1.pdf",
      },
    ],
  },
  {
    year: "2026",
    title: "Attorney General Intervenes — Statewide Significance",
    description:
      "Massachusetts AG Andrea Campbell moves to intervene in Barrett's case, recognizing its constitutional implications for 141+ communities across the state. Barrett's legal team files motion for summary judgment. The case is pending in Massachusetts Land Court.",
    sources: [
      {
        label: "Cambridge Day",
        url: "https://www.cambridgeday.com/2026/02/24/ag-defends-zoning-laws/",
      },
      {
        label: "Sheetz v. El Dorado — 9-0 SCOTUS Opinion",
        url: "https://www.supremecourt.gov/opinions/23pdf/22-1074_bqmd.pdf",
      },
    ],
  },
];

export const categoryColors: Record<PressItem["category"], string> = {
  Development: "border-gold/40 text-gold",
  Community: "border-emerald-500/40 text-emerald-400",
  Policy: "border-blue-400/40 text-blue-400",
  Finance: "border-amber-400/40 text-amber-300",
  Zoning: "border-violet-400/40 text-violet-400",
};
