import Script from "next/script";
import ManifestoPage from "./ManifestoPage";

export const metadata = {
  title: "The Panelist Manifesto",
  description:
    "A declaration of our commitment to the art of restraint, the beauty of minimalism, and the power of a single frame.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/manifesto`,
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Panelist Manifesto",
    name: "The Panelist Manifesto",
    alternativeHeadline: "Minimalism, Meaning, and the Power of a Single Frame",
    description:
      "A declaration of our commitment to the art of restraint, the beauty of minimalism, and the profound impact of single-frame storytelling.",
    author: {
      "@type": "Organization",
      name: "The Panelist",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/manifesto`,
    },
    articleSection: "Philosophy",
    inLanguage: "en",
    isAccessibleForFree: true,
    datePublished: "2025-06-20",
    dateModified: "2025-06-20",
    keywords: [
      "The Panelist",
      "art manifesto",
      "minimalist art",
      "single-panel",
      "visual philosophy",
      "storytelling",
      "creative principles",
    ],
  };

  return (
    <>
      <Script
        id="manifesto-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ManifestoPage />
    </>
  );
}
