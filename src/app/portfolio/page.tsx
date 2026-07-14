import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio Rolek Reklamowych Dębica | Realizacje Video",
  description:
    "Zobacz realizacje rolek reklamowych dla firm z Dębicy i Podkarpacia — barbershopy, salony beauty, mechanicy, detailing. Profesjonalne video na Instagram Reels, TikTok i YouTube Shorts.",
  alternates: {
    canonical: "https://ikcreativeads.pl/portfolio",
  },
  openGraph: {
    title: "Portfolio Rolek Reklamowych | IK Creative Ads Dębica",
    description:
      "Realizacje video dla firm z Dębicy i Podkarpacia. Barbershopy, salony beauty, mechanicy i więcej.",
    url: "https://ikcreativeads.pl/portfolio",
  },
};

export default function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <PortfolioPage />
      </main>
      <Footer />
    </>
  );
}
