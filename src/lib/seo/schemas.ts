const BASE_URL = "https://thaneandreeve.com";
const FIRM_NAME = "Thane & Reeve";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    additionalType: "RealEstateCompany",
    name: FIRM_NAME,
    legalName: "Thane & Reeve Holdings LLC",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/favicon.png`,
    },
    image: `${BASE_URL}/og-image.png`,
    description:
      "Thane & Reeve is a Northeast real estate firm that acquires, develops, and manages institutional-quality property. Organized around the refusal to separate ownership from operations. Three divisions: Capital, Development, Management.",
    email: "contact@thaneandreeve.com",
    foundingDate: "2026",
    founder: [
      { "@type": "Person", name: "Patrick Barrett", jobTitle: "Founder & Managing Partner" },
      { "@type": "Person", name: "Timothy Johnson", jobTitle: "Co-Founder & Partner" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@thaneandreeve.com",
      contactType: "sales",
      areaServed: "US-Northeast",
      availableLanguage: "English",
    },
    areaServed: "Northeast United States",
    slogan: "Land held. Land managed.",
    knowsAbout: [
      "Real Estate Acquisitions",
      "Real Estate Syndications",
      "Ground-Up Development",
      "Mixed-Use Development",
      "Multifamily Real Estate",
      "Asset Management",
      "Property Management",
      "Entitlements & Zoning",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "RealEstateCompany",
    name: FIRM_NAME,
    legalName: "Thane & Reeve Holdings LLC",
    url: BASE_URL,
    description:
      "Thane & Reeve — a Northeast real estate firm. Boston-based, operating across the Boston–NYC corridor. Acquisitions, development, and management under one accountable roof.",
    email: "contact@thaneandreeve.com",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 42.3601,
        longitude: -71.0589,
      },
      geoRadius: "400000",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: organizationSchema(),
  };
}

export function personSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    url: person.url || BASE_URL,
    worksFor: {
      "@type": "Organization",
      name: FIRM_NAME,
      url: BASE_URL,
    },
    knowsAbout: [
      "Real Estate Acquisitions",
      "Ground-Up Development",
      "Asset Management",
      "Property Operations",
    ],
  };
}

/**
 * Structured data for an owned/operated property, so answer engines can
 * describe the firm's assets as entities (name, type, location, scale).
 */
export function propertySchema(p: {
  name: string;
  description: string;
  location: string; // "Cambridge, MA"
  assetType: string;
  units: number;
  url: string;
  image?: string;
}) {
  const [locality, region] = p.location.split(",").map((s) => s.trim());
  const at = p.assetType.toLowerCase();
  const hasHotel = /hotel|lodging/.test(at);
  const hasResidential = /residential|multifamily|home|apartment/.test(at);
  // Mixed-use (e.g. "Hotel + Residential") has no clean schema.org type — use Place.
  const type =
    hasHotel && !hasResidential
      ? "Hotel"
      : hasResidential && !hasHotel
        ? "ApartmentComplex"
        : "Place";
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: p.name,
    description: p.description,
    url: `${BASE_URL}${p.url}`,
    address: {
      "@type": "PostalAddress",
      ...(locality && { addressLocality: locality }),
      ...(region && { addressRegion: region }),
      addressCountry: "US",
    },
    ...(type === "Hotel"
      ? { numberOfRooms: p.units }
      : type === "ApartmentComplex"
        ? { numberOfAccommodationUnits: p.units }
        : {}),
    ...(p.image?.startsWith("http") && { photo: p.image }),
    owner: { "@id": `${BASE_URL}/#organization` },
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  const articleUrl = `${BASE_URL}${article.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    inLanguage: "en-US",
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
      worksFor: { "@id": `${BASE_URL}/#organization` },
    },
    publisher: {
      "@type": "Organization",
      name: FIRM_NAME,
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
    },
    ...(article.image && {
      image: article.image.startsWith("http")
        ? article.image
        : `${BASE_URL}/og-image.png`,
    }),
  };
}

export function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: FIRM_NAME,
    url: BASE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@thaneandreeve.com",
      contactType: "sales",
      areaServed: "Northeast United States",
      availableLanguage: "English",
    },
  };
}

export function itemListSchema(
  items: { name: string; url: string; description?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${BASE_URL}${item.url}`,
      ...(item.description && { description: item.description }),
    })),
  };
}
