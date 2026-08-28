import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-work",
  display: "swap",
});

const siteUrl = "https://ikcreativeads.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marketing Internetowy Dębica | Rozwijamy Firmy Online | IK Creative Ads",
    template: "%s | IK Creative Ads Dębica",
  },
  description:
    "Rozrastamy Twoją firmę w internecie — rolki reklamowe, strony WWW, social media i reklama video. Działamy w Dębicy, Mielcu, Rzeszowie i całym Podkarpaciu. Bezpłatna konsultacja!",
  keywords: [
    "marketing internetowy Dębica",
    "marketing dla firm Dębica",
    "agencja marketingowa Dębica",
    "agencja reklamowa Dębica",
    "reklama w internecie Dębica",
    "social media Dębica",
    "rolki reklamowe Dębica",
    "reklama video Dębica",
    "strony internetowe Dębica",
    "pozycjonowanie Dębica",
    "Instagram Reels Dębica",
    "TikTok reklama Dębica",
    "marketing Podkarpacie",
    "agencja reklamowa Podkarpacie",
    "reklama Podkarpacie",
    "marketing internetowy Mielec",
    "marketing internetowy Rzeszów",
    "rolki reklamowe Mielec",
    "reklama video Rzeszów",
    "reklama video Ropczyce",
    "reklama video Stalowa Wola",
    "video marketing social media",
    "reels reklamowe dla firm",
    "strony internetowe dla firm",
    "IK Creative Ads",
  ],
  authors: [{ name: "IK Creative Ads" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Marketing Internetowy Dębica | Rozwijamy Firmy Online | IK Creative Ads",
    description:
      "Rozrastamy Twoją firmę w internecie — rolki reklamowe, strony WWW i social media od 200 zł. Działamy w Dębicy i całym Podkarpaciu. Bezpłatna konsultacja.",
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
    title: "Marketing Internetowy Dębica | IK Creative Ads",
    description:
      "Rozrastamy Twoją firmę w internecie — rolki reklamowe, strony WWW i social media. Działamy w Dębicy i całym Podkarpaciu.",
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
    <html lang="pl" className={plusJakarta.variable}>
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
