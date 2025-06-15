import type { Metadata } from "next";
import { Playfair_Display, Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
  keywords: "art, single panel, minimalist, visual storytelling, creative platform",
  openGraph: {
    title: "The Panelist - Where Art Speaks in Silence",
    description: "A one-frame art and caption platform celebrating visual subtlety and creative storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${crimson.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}