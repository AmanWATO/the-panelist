import BlogHero from "@/components/blog/blog-hero";
import BlogGrid from "@/components/blog/blog-grid";
import BlogNewsletter from "@/components/blog/blog-newsletter";
import Script from "next/script";

export const metadata = {
  title: "Blog - The Panelist",
  description:
    "Insights, stories, and inspiration from the world of single-panel art and minimalist storytelling.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Panelist Blog",
    description:
      "Insights, stories, and inspiration from the world of single-panel art and minimalist storytelling.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    },
  };

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen pt-20">
        <BlogHero />
        <BlogGrid />
        <BlogNewsletter />
      </div>
    </>
  );
}
