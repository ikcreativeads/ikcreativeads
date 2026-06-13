"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const plans = [
  {
    name: "Starter",
    icon: "🌱",
    highlight: false,
    price: "699",
    period: "/ miesiąc",
    savings: "Oszczędzasz 101 zł vs. cena jednorazowa",
    description: "1 rolka tygodniowo (4 rolki w miesiącu)",
    features: [
      "Nagranie + montaż każdej rolki",
      "Gotowe pliki do publikacji",
      "Format pod FB, IG, TikTok",
      "Napisy i muzyka w cenie",
    ],
  },
  {
    name: "Najpopularniejszy",
    icon: "⭐",
    highlight: true,
    price: "1199",
    period: "/ miesiąc",
    savings: "Oszczędzasz 401 zł vs. cena jednorazowa",
    description: "2 rolki tygodniowo (8 rolek w miesiącu)",
    features: [
      "Nagranie + montaż każdej rolki",
      "1 sesja zdjęciowa gratis",
      "Priorytetowy termin realizacji",
      "Format pod FB, IG, TikTok",
      "Napisy i muzyka w cenie",
    ],
  },
  {
    name: "Premium",
    icon: "👑",
    highlight: false,
    price: "1799",
    period: "/ miesiąc",
    savings: "Oszczędzasz 1 001 zł vs. cena jednorazowa",
    description: "3 rolki tygodniowo + zdjęcia (12 rolek + 2 sesje miesięcznie)",
    features: [
      "Nagranie + montaż każdej rolki",
      "2 sesje zdjęciowe miesięcznie",
      "Dron 1× w miesiącu gratis",
      "Pomysły i scenariusze treści",
      "Stały termin co tydzień",
      "Priorytetowa realizacja",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="cennik" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4A94B]/3 to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Cennik"
          title={
            <>
              Pakiety miesięczne{" "}
              <span className="text-gold-gradient">dopasowane do Ciebie</span>
            </>
          }
          description="Regularna współpraca to niższe koszty i lepsze efekty. Wybierz pakiet i zacznij budować markę przez video."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#D4A94B]/15 to-[#162235] border-2 border-[#D4A94B]/60 shadow-[0_0_50px_rgba(212,169,75,0.15)]"
                  : "border border-white/8 bg-[#162235]/60"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-4 py-1.5 text-xs font-bold text-[#0E1624]">
                    <Star className="h-3 w-3 fill-[#0E1624]" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{plan.icon}</span>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl font-black text-gold-gradient">{plan.price}</span>
                <span className="text-white/50 text-sm ml-1">zł{plan.period}</span>
              </div>

              {/* Savings */}
              <p className="text-xs text-[#D4A94B]/70 font-medium mb-4">{plan.savings}</p>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed mb-6 pb-6 border-b border-white/10">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#D4A94B] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] text-[#0E1624] hover:shadow-[0_0_30px_rgba(212,169,75,0.4)] hover:scale-105"
                    : "border border-[#D4A94B]/40 text-[#D4A94B] hover:bg-[#D4A94B]/10"
                }`}
              >
                Wybierz pakiet
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <span className="text-[#D4A94B]">✦</span>
            Retusz i obróbka zdjęć zawsze w cenie
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D4A94B]">✦</span>
            Realizacja w ciągu 48h od sesji
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D4A94B]">✦</span>
            Ceny do negocjacji przy dłuższej współpracy
          </div>
        </div>

        {/* Link to full pricing */}
        <div className="mt-8 text-center">
          <a
            href="/cennik"
            className="inline-flex items-center gap-2 text-sm text-[#D4A94B] hover:text-[#F6D98C] transition-colors font-semibold"
          >
            Zobacz pełny cennik (rolki jednorazowe, fotografia)
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
