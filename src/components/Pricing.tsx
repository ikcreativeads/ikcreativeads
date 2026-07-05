"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const plans = [
  {
    name: "Widoczność",
    highlight: false,
    price: "699",
    period: "/ miesiąc",
    savings: "Oszczędzasz 101 zł vs. jednorazowe",
    description: "4 rolki w miesiącu (1 tygodniowo)",
    features: [
      "Nagranie, montaż, napisy, muzyka, korekcja koloru",
      "Format pod Facebook, Instagram i TikTok",
      "1 wizyta nagraniowa w miesiącu",
      "Realizacja do 48h",
      "Gwarancja poprawek do skutku",
    ],
  },
  {
    name: "Wzrost",
    highlight: true,
    price: "1199",
    period: "/ miesiąc",
    savings: "Oszczędzasz 401 zł vs. jednorazowe",
    description: "8 rolek w miesiącu (2 tygodniowo)",
    features: [
      "Wszystko z pakietu Widoczność",
      "1 darmowa sesja zdjęciowa",
      "Plan publikacji na cały miesiąc",
      "Priorytetowy termin realizacji",
      "Miesięczny raport zasięgów",
    ],
  },
  {
    name: "Partner",
    highlight: false,
    price: "1799",
    period: "/ miesiąc",
    savings: "Oszczędzasz 1001 zł vs. jednorazowe",
    description: "12 rolek w miesiącu",
    features: [
      "Wszystko z pakietu Wzrost",
      "2 sesje zdjęciowe miesięcznie",
      "1 ujęcie z drona gratis",
      "Stały zarezerwowany termin co tydzień",
      "Plan publikacji + raport efektów",
    ],
  },
];

const bottomNotes = [
  "Realizacja do 48h",
  "Pierwsza rolka z gwarancją satysfakcji",
  "Retusz i obróbka zdjęć zawsze w cenie",
];

export default function Pricing() {
  return (
    <section id="cennik" className="relative section-padding border-t border-white/6">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title={
            <>
              Pakiety miesięczne{" "}
              <span className="text-[#D4A94B]">dopasowane do Ciebie</span>
            </>
          }
          description="Regularna współpraca to niższe koszty i lepsze efekty. Wybierz pakiet i zacznij budować markę przez video."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? "border-2 border-[#D4A94B]/50 bg-[#111d2e]"
                  : "border border-white/8 bg-[#0E1624]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-[#D4A94B] px-3.5 py-1 text-[11px] font-bold text-[#0E1624]">
                    <Star className="h-2.5 w-2.5 fill-[#0E1624]" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">{plan.name}</h3>

              <div className="mb-1">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-white/40 text-sm ml-1">zł{plan.period}</span>
              </div>

              <p className="text-xs text-[#D4A94B]/70 font-medium mb-4">{plan.savings}</p>

              <p className="text-sm text-white/50 mb-6 pb-6 border-b border-white/6">
                {plan.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#D4A94B] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-opacity ${
                  plan.highlight
                    ? "bg-[#D4A94B] text-[#0E1624] hover:opacity-90"
                    : "border border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                }`}
              >
                Wybierz pakiet
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Dodatki */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl border border-white/6 bg-[#0E1624] p-6"
        >
          <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-4">Dodatki do pakietów</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              ["Ujęcie z drona", "200 zł"],
              ["Dodatkowa rolka poza pakietem", "250 zł"],
              ["Dodatkowa sesja zdjęciowa", "250 zł"],
              ["Film wizerunkowy 60–90s", "od 600 zł"],
              ["Realizacja ekspresowa 24h", "+30%"],
            ].map(([name, price]) => (
              <div key={name} className="flex flex-col gap-0.5">
                <span className="text-xs text-white/40">{name}</span>
                <span className="text-sm font-bold text-white">{price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meta Ads */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 rounded-2xl border border-white/8 bg-[#0E1624] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-1">Usługa dodatkowa</p>
            <p className="text-base font-bold text-white">Silnik Zasięgu — prowadzenie reklam Meta Ads</p>
            <p className="text-sm text-white/45 mt-1">
              Kampanie na Facebooku i Instagramie · Targetowanie lokalne (Dębica i okolice) · Raport zasięgów
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-2xl font-black text-white">od 490 zł</p>
            <p className="text-xs text-white/35">/ miesiąc + budżet reklamowy</p>
          </div>
        </motion.div>

        {/* Bottom notes */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
          {bottomNotes.map((note) => (
            <div key={note} className="flex items-center gap-2">
              <span className="text-[#D4A94B]">✦</span>
              {note}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="/cennik"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            Zobacz pełny cennik (rolki jednorazowe, fotografia)
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
