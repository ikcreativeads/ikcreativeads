import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Benefits from "@/components/Benefits";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Benefits />
        <HowWeWork />
        <Services />
        <Portfolio />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
