import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Rolki Reklamowe dla Firm | IK Creative Ads",
  description:
    "Tworzymy skuteczne rolki reklamowe dla firm. Reels, TikTok, Shorts i content video, który zwiększa zasięgi oraz sprzedaż.",
  keywords: [
    "rolki reklamowe",
    "reels dla firm",
    "tiktok ads",
    "produkcja video social media",
    "agencja kreatywna",
    "content marketing video",
    "IK Creative Ads",
  ],
  authors: [{ name: "IK Creative Ads" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Rolki Reklamowe dla Firm | IK Creative Ads",
    description:
      "Tworzymy skuteczne rolki reklamowe dla firm. Reels, TikTok, Shorts i content video, który zwiększa zasięgi oraz sprzedaż.",
    url: siteUrl,
    siteName: "IK Creative Ads",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolki Reklamowe dla Firm | IK Creative Ads",
    description:
      "Tworzymy skuteczne rolki reklamowe dla firm. Reels, TikTok, Shorts i content video, który zwiększa zasięgi oraz sprzedaż.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="bg-navy text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
