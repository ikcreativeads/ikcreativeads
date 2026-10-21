import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import MobileNav from "@/components/ui/MobileNav";

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
    default: "Agencja Social Media Dębica | Video Marketing, Strony WWW",
    template: "%s | IK Creative Ads",
  },
  description:
    "Agencja social media i reklama video w Dębicy. Rolki reklamowe od 200 zł, tanie strony internetowe od 699 zł, Meta Ads. Działamy w całym Podkarpaciu. Bezpłatna wycena.",
  keywords: [
    "agencja social media Dębica",
    "agencja reklamowa Dębica",
    "agencja reklamowa Rzeszów",
    "tanie strony internetowe",
    "strony internetowe Rzeszów",
    "tanie strony www",
    "wycena strony internetowej",
    "rolki reklamowe Dębica",
    "produkcja filmów reklamowych",
    "reklama video Dębica",
    "social media Dębica",
    "strony internetowe Dębica",
    "marketing internetowy Dębica",
    "agencja marketingowa Dębica",
    "Instagram Reels Dębica",
    "TikTok reklama Dębica",
    "marketing Podkarpacie",
    "agencja reklamowa Podkarpacie",
    "marketing internetowy Rzeszów",
    "rolki reklamowe Mielec",
    "reels reklamowe dla firm",
    "strony internetowe dla firm",
    "IK Creative Ads",
  ],
  authors: [{ name: "IK Creative Ads" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Agencja Social Media Dębica | Video Marketing, Strony WWW",
    description:
      "Agencja social media i reklama video w Dębicy. Rolki od 200 zł, tanie strony internetowe od 699 zł, Meta Ads. Działamy w całym Podkarpaciu. Bezpłatna wycena.",
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
        <MobileNav />
      </body>
    </html>
  );
}
