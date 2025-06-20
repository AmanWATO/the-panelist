import Script from "next/script";
import ArtistsPage from "./ArtistsPage";

export const metadata = {
  title: "Featured Artists - The Panelist",
  description:
    "Explore our curated collection of single-panel artists. Discover minimal masterpieces and connect with artists redefining visual storytelling.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/artists`,
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artist Panel Exhibition",
    description:
      "Discover our curated collection of single-panel artists. When you apply for our panel exhibition program, your work will be featured here for our growing community to appreciate and connect with.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/artists`,
    mainEntity: {
      "@type": "ItemList",
      name: "Featured Artists",
      description: "Curated collection of exceptional single-panel artists",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
    },
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    inLanguage: "en",
  };

  return (
    <>
      <Script
        id="artist-exhibition-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ArtistsPage />
    </>
  );
}
