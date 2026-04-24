const BASE_URL = "https://thaneandreeve.com";
const FIRM_NAME = "Thane & Reeve";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    additionalType: "RealEstateCompany",
    name: FIRM_NAME,
    legalName: "Thane & Reeve Holdings LLC",
    url: BASE_URL,
    description:
      "Thane & Reeve is a Northeast real estate firm that acquires, develops, and manages institutional-quality property. Organized around the refusal to separate ownership from operations. Three divisions: Capital, Development, Management.",
    email: "contact@thaneandreeve.com",
    foundingDate: "2026",
    founder: [
      { "@type": "Person", name: "Patrick Barrett", jobTitle: "Founder & Managing Partner" },
      { "@type": "Person", name: "Timothy Johnson", jobTitle: "Partner" },
    ],
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

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}${article.url}`,
    datePublished: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: FIRM_NAME,
      url: BASE_URL,
    },
    ...(article.image && { image: article.image }),
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
