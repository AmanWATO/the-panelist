import Script from "next/script";
import ContestPage from "./ContestPage";

export const metadata = {
  title: "One Frame Wonder Contest - The Panelist",
  description:
    "Our inaugural art contest celebrating single-panel art and minimalist storytelling. When everyone draws noise, draw silence.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contest`,
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "One Frame Wonder",
    description:
      "Our inaugural art contest celebrating single-panel art and minimalist storytelling. When everyone draws noise, draw silence.",
    startDate: "2025-08-11T00:00:00+05:30",
    endDate: "2025-09-25T23:59:59+05:30",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contest`,
    },
    organizer: {
      "@type": "Organization",
      name: "The Panelist",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    offers: {
      "@type": "Offer",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contest`,
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-06-01T00:00:00+05:30",
    },
    image: [`${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`],
    performer: {
      "@type": "PerformingGroup",
      name: "The Panelist Community",
    },
    inLanguage: "en",
  };

  return (
    <>
      <Script
        id="contest-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ContestPage />
    </>
  );
}
