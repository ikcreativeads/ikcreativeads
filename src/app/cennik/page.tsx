import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CennikPage from "@/components/CennikPage";

export const metadata: Metadata = {
  title: "Cennik Rolek Reklamowych Dębica | Ceny Video Marketingu",
  description:
    "Cennik rolek reklamowych w Dębicy: rolka od 200 zł, pakiety miesięczne od 699 zł. Fotografia firmowa, nagrania dronem, reklamy Meta Ads. Przejrzyste ceny, bez ukrytych kosztów.",
  alternates: {
    canonical: "https://ikcreativeads.pl/cennik",
  },
  openGraph: {
    title: "Cennik Rolek Reklamowych Dębica | IK Creative Ads",
    description:
      "Rolka reklamowa od 200 zł. Pakiety miesięczne od 699 zł. Sprawdź pełny cennik — Dębica i Podkarpacie.",
    url: "https://ikcreativeads.pl/cennik",
  },
};

export default function Cennik() {
  return (
    <>
      <Header />
      <main>
        <CennikPage />
      </main>
      <Footer />
    </>
  );
}
