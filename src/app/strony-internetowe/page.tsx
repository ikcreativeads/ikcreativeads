import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StronaInternetowaPage from "@/components/StronaInternetowaPage";

export const metadata: Metadata = {
  title: "Strony Internetowe Dębica | Tworzenie Stron WWW dla Firm",
  description:
    "Tworzenie stron internetowych w Dębicy — landing page od 1500 zł, strona firmowa od 2500 zł, sklep internetowy od 4500 zł. Responsywne, szybkie, zoptymalizowane pod Google. Bezpłatna wycena.",
  alternates: {
    canonical: "https://ikcreativeads.pl/strony-internetowe",
  },
  openGraph: {
    title: "Strony Internetowe Dębica | IK Creative Ads",
    description:
      "Profesjonalne strony WWW dla firm z Dębicy i Podkarpacia. Landing page, strona firmowa, sklep online. Bezpłatna wycena.",
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
