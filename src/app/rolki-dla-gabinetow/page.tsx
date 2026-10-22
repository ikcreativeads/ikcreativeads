import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GabinetyPage from "@/components/GabinetyPage";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Rolki Reklamowe dla Gabinetów Kosmetologii i Fizjoterapii | Dębica, Rzeszów",
  description:
    "Rolki reklamowe dla gabinetów kosmetologii, medycyny estetycznej i fizjoterapii. Nagranie w gabinecie w godzinę, gotowe w 48 h. Pierwsza rolka 200 zł z gwarancją. Dębica, Rzeszów, Tarnów, Mielec.",
  alternates: {
    canonical: "https://www.ikcreativeads.pl/rolki-dla-gabinetow",
  },
  openGraph: {
    title: "Rolki reklamowe dla gabinetów | IK Creative Ads",
    description:
      "Nagrywamy w Twoim gabinecie w godzinę, gotowa rolka w 48 h. Pierwsza rolka 200 zł — nie robi roboty, nie płacisz.",
    url: "https://www.ikcreativeads.pl/rolki-dla-gabinetow",
  },
};

export default function RolkiDlaGabinetow() {
  return (
    <>
      <Header />
      <main>
        <GabinetyPage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
