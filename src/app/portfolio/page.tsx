import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio | IK Creative Ads — Realizacje Video",
  description:
    "Realizacje video dla barbershopów, salonów beauty, warsztatów i detailingu. Profesjonalne rolki reklamowe z Dębicy.",
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
