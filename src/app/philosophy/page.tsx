import Script from "next/script";
import PhilosophyPage from "./PhilosophyPage";

export const metadata = {
  title: "Philosophy - The Panelist",
  description:
    "Our philosophy on single-panel art and minimalist storytelling. Understanding the power of restraint in visual expression.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/philosophy`,
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Philosophy",
    description:
      "Our philosophy on single-panel art and minimalist storytelling. Understanding the power of restraint in visual expression.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/philosophy`,
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
    },
    dateModified: "2025-01-01",
  };

  return (
    <>
      <Script
        id="philosophy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PhilosophyPage />
    </>
  );
}
