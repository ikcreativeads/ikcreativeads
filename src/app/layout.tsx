import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const barlowSC = Barlow_Semi_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://ikcreativeads.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rolki Reklamowe Dębica | Reklama Video dla Firm | IK Creative Ads",
    template: "%s | IK Creative Ads Dębica",
  },
  description:
    "Rolki reklamowe Dębica — profesjonalne video na Instagram Reels, TikTok i YouTube Shorts. Nagranie + montaż + napisy od 200 zł. Działamy w Dębicy, Mielcu, Rzeszowie i całym Podkarpaciu. Zadzwoń po bezpłatną wycenę!",
  keywords: [
    "rolki reklamowe Dębica",
    "reklama Dębica",
    "reklama video Dębica",
    "film reklamowy Dębica",
    "agencja reklamowa Dębica",
    "agencja marketingowa Dębica",
    "marketing Dębica",
    "video marketing Dębica",
    "agencja video Dębica",
    "social media Dębica",
    "Instagram Reels Dębica",
    "TikTok reklama Dębica",
    "rolki reklamowe Podkarpacie",
    "reklama Podkarpacie",
    "agencja reklamowa Podkarpacie",
    "rolki reklamowe Mielec",
    "reklama video Mielec",
    "rolki reklamowe Rzeszów",
    "reklama video Ropczyce",
    "reklama video Stalowa Wola",
    "produkcja video social media",
    "reels reklamowe dla firm",
    "youtube shorts reklama firma",
    "rolki reklamowe cena",
    "IK Creative Ads",
  ],
  authors: [{ name: "IK Creative Ads" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Rolki Reklamowe Dębica | Reklama Video dla Firm | IK Creative Ads",
    description:
      "Profesjonalne rolki reklamowe w Dębicy od 200 zł. Nagranie na miejscu, montaż, napisy, muzyka. Instagram Reels, TikTok, YouTube Shorts. Bezpłatna konsultacja.",
    url: siteUrl,
    siteName: "IK Creative Ads",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/logo-square.jpg",
        width: 800,
        height: 800,
        alt: "IK Creative Ads — Rolki Reklamowe Dębica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolki Reklamowe Dębica | IK Creative Ads",
    description:
      "Profesjonalne rolki reklamowe w Dębicy od 200 zł. Nagranie + montaż + napisy. Działamy w Dębicy i całym Podkarpaciu.",
    images: ["/logo-square.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    <html lang="pl" className={`${barlow.variable} ${barlowSC.variable}`}>
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
