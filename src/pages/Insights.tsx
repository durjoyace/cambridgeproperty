import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import PostCard from "@/components/blog/PostCard";
import NewsletterCapture from "@/components/NewsletterCapture";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema, itemListSchema, articleSchema } from "@/lib/seo/schemas";
import { blogPosts } from "@/lib/data/blog-posts";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PageHeader } from "@/components/brand/PageHeader";

export default function Insights() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.insights}
        schema={[
          itemListSchema(
            blogPosts.map((p) => ({
              name: p.title,
              url: `/insights/${p.slug}`,
              description: p.excerpt,
            })),
          ),
          ...blogPosts.map((p) =>
            articleSchema({
              title: p.title,
              description: p.excerpt,
              url: `/insights/${p.slug}`,
              datePublished: p.date,
              author: p.author,
            }),
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/insights" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <PageHeader
            label="Insights"
            descriptor="Field notes &amp; LP correspondence"
          />

          <div className="max-w-4xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              Letters &amp; field notes
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              Short, direct, and willing to say the uncomfortable thing.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-[1.7] text-ink/70 font-light max-w-2xl">
              Our quarterly correspondence sets the voice for every letter that
              follows. Most LP letters read like press releases — ours read like a
              partner writing to another partner.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-24 bg-ink">
        <div className="container mx-auto px-6 md:px-12 max-w-lg text-center">
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass-light mb-4">
            Subscribe
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-paper mb-4 tracking-tight">
            The letter goes out when we have something to say.
          </h2>
          <p className="font-serif italic text-paper/70 text-base leading-[1.7] mb-8">
            Not on a schedule. Not to a compliance file. To partners.
          </p>
          <div className="max-w-sm mx-auto">
            <NewsletterCapture />
          </div>
        </div>
      </section>
    </>
  );
}
