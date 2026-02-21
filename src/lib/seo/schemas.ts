const BASE_URL = "https://barrettjohnson.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Barrett & Johnson",
    url: BASE_URL,
    description:
      "Cambridge and Boston property owners and developers — acquiring, improving, and operating multifamily and mixed-use assets across Greater Boston.",
    telephone: "617-778-3521",
    areaServed: "Greater Boston",
    knowsAbout: [
      "Multifamily Real Estate",
      "Value-Add Acquisitions",
      "Mixed-Use Properties",
      "Property Management",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Barrett & Johnson",
    url: BASE_URL,
    description:
      "Patrick W. Barrett III and Tim Johnson, CPM are Cambridge-based property owners and developers.",
    telephone: "617-778-3521",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cambridge",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 42.3736,
        longitude: -71.1097,
      },
      geoRadius: "50000",
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

export function serviceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: organizationSchema(),
  };
}

export function itemListSchema(
  items: { name: string; url: string; description?: string }[]
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
