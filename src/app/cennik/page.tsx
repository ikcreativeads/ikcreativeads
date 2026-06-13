import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CennikPage from "@/components/CennikPage";

export const metadata: Metadata = {
  title: "Cennik | IK Creative Ads",
  description:
    "Sprawdź ceny rolek reklamowych, fotografii firmowej i pakietów miesięcznych. IK Creative Ads — Dębica.",
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
