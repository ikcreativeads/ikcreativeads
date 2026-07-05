import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://ikcreativeads.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "IK Creative Ads — Rolki Reklamowe Dębica | Reels, TikTok, Shorts",
  description:
    "Agencja video premium z Dębicy. Tworzymy profesjonalne rolki reklamowe na Instagram Reels, TikTok i YouTube Shorts. Zdobądź klientów dzięki skutecznemu video marketingowi. Sprawdź cennik i zamów bezpłatną konsultację.",
  keywords: [
    "rolki reklamowe Dębica",
    "agencja video Dębica",
    "reels reklamowe",
    "tiktok reklama firma",
    "youtube shorts reklama",
    "produkcja video social media",
    "instagram reels dla firm",
    "agencja kreatywna Podkarpacie",
    "content marketing video",
    "rolki reklamowe cena",
    "IK Creative Ads",
    "video marketing Dębica",
    "reklama Dębica",
    "agencja marketingowa Dębica",
    "marketing Dębica",
    "reklama Podkarpacie",
    "rolki Podkarpacie",
    "agencja reklamowa Dębica",
    "marketing internetowy Dębica",
    "reklama video Podkarpacie",
  ],
  authors: [{ name: "IK Creative Ads" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "IK Creative Ads — Rolki Reklamowe Dębica | Reels, TikTok, Shorts",
    description:
      "Agencja video premium z Dębicy. Tworzymy profesjonalne rolki reklamowe na Instagram Reels, TikTok i YouTube Shorts. Bezpłatna konsultacja.",
    url: siteUrl,
    siteName: "IK Creative Ads",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IK Creative Ads — Rolki Reklamowe Dębica | Reels, TikTok, Shorts",
    description:
      "Agencja video premium z Dębicy. Profesjonalne rolki reklamowe na Reels, TikTok i Shorts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1624",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-navy text-white font-sans antialiased overflow-x-hidden">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
