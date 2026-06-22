import { Head } from "vite-react-ssg";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
  /** Article metadata — only emitted when ogType === "article". */
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  /** Override the social-image alt text. */
  imageAlt?: string;
  /** Keep the page out of the index (e.g. the 404 page). */
  noindex?: boolean;
}

const BASE_URL = "https://thaneandreeve.com";
const SITE_NAME = "Thane & Reeve";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_IMAGE_ALT =
  "Thane & Reeve — Real Property · Northeast. Land held. Land managed.";

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
  publishedTime,
  modifiedTime,
  author,
  imageAlt = DEFAULT_IMAGE_ALT,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("Thane") ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const isArticle = ogType === "article";

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {/* Let search + answer engines use full snippets and large image previews. */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {isArticle && author && (
        <meta property="article:author" content={author} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Head>
  );
}
