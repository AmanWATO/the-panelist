import type { Metadata } from "next";
import { Playfair_Display, Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const crimson = Crimson_Text({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "The Panelist - Where Art Speaks in Silence",
  description:
    "A one-frame art and caption platform celebrating visual subtlety and creative storytelling. Join the quiet revolution.",
  keywords:
    "art, single panel, minimalist, visual storytelling, creative platform",
  openGraph: {
    title: "The Panelist - Where Art Speaks in Silence",
    description:
      "A one-frame art and caption platform celebrating visual subtlety and creative storytelling.",
    type: "website",
  },
  icons: {
    icon: `/the_panelist.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Panelist",
    description:
      "The Panelist is a curated stage for single-panel visual art and minimalist storytelling—where meaning is whispered in stillness and stories unfold in a single frame.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    inLanguage: "en",
    genre: "Art, Minimalism, Visual Storytelling",
    sameAs: ["https://instagram.com/thepanelist.art"],
    publisher: {
      "@type": "Organization",
      name: "The Panelist",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/the_panelist.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${crimson.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
