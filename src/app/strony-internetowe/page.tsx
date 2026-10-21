import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StronaInternetowaPage from "@/components/StronaInternetowaPage";

export const metadata: Metadata = {
  title: "Tanie Strony Internetowe | Rzeszów, Dębica od 699 zł",
  description:
    "Tanie strony internetowe dla firm — landing page od 699 zł, strona firmowa od 1299 zł, sklep od 2499 zł. Responsywne, szybkie, SEO. Rzeszów, Dębica, Podkarpacie.",
  alternates: {
    canonical: "https://ikcreativeads.pl/strony-internetowe",
  },
  openGraph: {
    title: "Strony Internetowe dla Firm | IK Creative Ads",
    description:
      "Profesjonalne strony WWW dla firm. Landing page od 699 zł, strona firmowa od 1299 zł, sklep online od 2499 zł. Bezpłatna wycena.",
    url: "https://ikcreativeads.pl/strony-internetowe",
  },
};

export default function StronaInternetowa() {
  return (
    <>
      <Header />
      <main>
        <StronaInternetowaPage />
      </main>
      <Footer />
    </>
  );
}
