import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileNav from "@/components/ui/MobileNav";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="pb-16 lg:pb-0">
        <Hero />
        <Portfolio />
        <Pricing />
        <Services />
        <Benefits />
        <HowWeWork />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
