import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioPage from "@/components/PortfolioPage";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio Video Reklamowe | Realizacje Dębica",
  description:
    "Realizacje rolek reklamowych dla firm z Dębicy — barbershopy, beauty, mechanicy, detailery. Video na Instagram Reels, TikTok i YouTube Shorts. Sprawdź nasze prace.",
  alternates: {
    canonical: "https://www.ikcreativeads.pl/portfolio",
  },
  openGraph: {
    title: "Portfolio Rolek Reklamowych | IK Creative Ads Dębica",
    description:
      "Realizacje video dla firm z Dębicy i Podkarpacia. Barbershopy, salony beauty, mechanicy i więcej.",
    url: "https://www.ikcreativeads.pl/portfolio",
  },
};

export default function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <PortfolioPage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
