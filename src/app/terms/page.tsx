import Script from "next/script";
import TermsPage from "./TermsPage";

export const metadata = {
  title: "Terms & Conditions - The Panelist",
  description:
    "The Panelist's terms and conditions governing the use of our platform and services.",
    alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    description:
      "The Panelist's terms and conditions governing the use of our platform and services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
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
    license: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
  };

  return (
    <>
      <Script
        id="terms-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <TermsPage />
    </>
  );
}
