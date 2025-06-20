import Script from "next/script";
import PrivacyPage from "./PrivacyPage";

export const metadata = {
  title: "Privacy Policy - The Panelist",
  description:
    "The Panelist's privacy policy outlining how we collect, use, and protect user information.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "The Panelist's privacy policy outlining how we collect, use, and protect user information.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    datePublished: "2025-06-20",
    dateModified: "2025-06-20",
    inLanguage: "en",
    license: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
  };

  return (
    <>
      <Script
        id="privacy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PrivacyPage />
    </>
  );
}
