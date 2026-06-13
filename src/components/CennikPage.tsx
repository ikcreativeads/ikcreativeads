"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Clapperboard, Camera, ArrowRight, ArrowLeft, X, ChevronRight } from "lucide-react";
import Container from "./ui/Container";

const jednorazowe = [
  {
    icon: "📷",
    name: "Rolka reklamowa",
    desc: "do 60 sek. — nagranie + montaż",
    price: "200 zł",
    details: [
      "Nagranie na miejscu u klienta",
      "Profesjonalny montaż i color grading",
      "Napisy animowane i muzyka w cenie",
      "Format pionowy 9:16 pod social media",
      "Gotowy plik do publikacji na FB, IG, TikTok",
    ],
  },
  {
    icon: "🚁",
    name: "Rolka z dronem",
    desc: "do 60 sek. — nagranie + dron + montaż",
    price: "250 zł",
    details: [
      "Nagranie z powietrza dronem 4K",
      "Ujęcia z ziemi i z lotu ptaka",
      "Profesjonalny montaż i color grading",
      "Napisy animowane i muzyka w cenie",
      "Format pionowy 9:16 pod social media",
    ],
  },
];

const fotografia = [
  {
    icon: "🏢",
    name: "Zdjęcia lokalu / biura",
    desc: "wnętrza, recepcja, sale — do 20 zdjęć",
    price: "120 zł",
    details: [
      "Do 20 gotowych zdjęć po obróbce",
      "Wnętrza, recepcja, sale konferencyjne",
      "Profesjonalne oświetlenie",
      "Retusz i obróbka w cenie",
      "Pliki w wysokiej rozdzielczości",
    ],
  },
  {
    icon: "👥",
    name: "Zdjęcia pracowników",
    desc: "portrety, zdjęcia przy pracy — do 20 zdjęć",
    price: "120 zł",
    details: [
      "Do 20 gotowych zdjęć po obróbce",
      "Portrety biznesowe i przy pracy",
      "Naturalne i studyjne ujęcia",
      "Retusz i obróbka w cenie",
      "Idealne na LinkedIn i stronę www",
    ],
  },
  {
    icon: "🛍️",
    name: "Zdjęcia produktów",
    desc: "na białym tle lub w aranżacji — do 20 szt.",
    price: "150 zł",
    details: [
      "Do 20 gotowych zdjęć po obróbce",
      "Na białym tle lub w aranżacji",
      "Profesjonalne oświetlenie produktu",
      "Retusz i usunięcie tła w cenie",
      "Idealne do sklepu i social media",
    ],
  },
  {
    icon: "🏗️",
    name: "Zdjęcia zewnętrzne firmy",
    desc: "elewacja, parking, otoczenie — do 15 zdjęć",
    price: "100 zł",
    details: [
      "Do 15 gotowych zdjęć po obróbce",
      "Elewacja, parking, otoczenie budynku",
      "Różne kąty i perspektywy",
      "Retusz i obróbka w cenie",
      "Buduje wiarygodność firmy online",
    ],
  },
  {
    icon: "🚁",
    name: "Zdjęcia z drona",
    desc: "widok z powietrza — do 15 zdjęć",
    price: "100 zł",
    details: [
      "Do 15 gotowych zdjęć po obróbce",
      "Ujęcia z powietrza dronem 4K",
      "Widok na firmę, teren i okolicę",
      "Retusz i obróbka w cenie",
      "Unikalny efekt wow dla klientów",
    ],
  },
];

const plans = [
  {
    name: "Starter",
    icon: "🌱",
    highlight: false,
    price: "699",
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

const bottomFeatures = [
  { icon: "✨", text: "Retusz i obróbka zdjęć zawsze w cenie" },
  { icon: "⏱️", text: "Realizacja w ciągu 48h od sesji" },
  { icon: "🤝", text: "Ceny do negocjacji przy dłuższej współpracy" },
];

type Item = { icon: string; name: string; desc: string; price: string; details: string[] };

export default function CennikPage() {
  const [modal, setModal] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1624] via-[#162235] to-[#0E1624] pt-28 pb-24">
      <Container>
        {/* Back link */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#D4A94B] transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć na stronę główną
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#D4A94B] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            IK Creative Ads • Dębica
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Pełny <span className="text-gold-gradient">cennik</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Produkcja wideo & fotografia. Przejrzyste ceny, bez ukrytych kosztów.
          </p>
        </motion.div>

        {/* Section 1 — Rolki jednorazowe */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A94B]/10 border border-[#D4A94B]/20">
              <Clapperboard className="h-5 w-5 text-[#D4A94B]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Rolki reklamowe</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {jednorazowe.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => setModal(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-white/8 bg-[#162235]/60 p-6 group hover:border-[#D4A94B]/30 transition-colors text-left cursor-pointer w-full"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-sm text-white/50 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-xl font-black text-gold-gradient">{item.price}</div>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A94B]/60 group-hover:text-[#D4A94B] transition-colors">
                  <ChevronRight className="h-3.5 w-3.5" />
                  Dowiedz się więcej
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Section 2 — Fotografia */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A94B]/10 border border-[#D4A94B]/20">
              <Camera className="h-5 w-5 text-[#D4A94B]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Fotografia firmowa</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fotografia.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => setModal(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-white/8 bg-[#162235]/60 p-5 hover:border-[#D4A94B]/30 transition-colors text-left cursor-pointer w-full group"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.name}</p>
                      <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-lg font-black text-gold-gradient">{item.price}</div>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A94B]/60 group-hover:text-[#D4A94B] transition-colors">
                  <ChevronRight className="h-3.5 w-3.5" />
                  Dowiedz się więcej
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0E1624] px-6 text-sm font-bold tracking-[0.2em] uppercase text-[#D4A94B]">
              Pakiety miesięczne
            </span>
          </div>
        </div>

        {/* Section 3 — Pakiety */}
        <div className="grid gap-6 lg:grid-cols-3 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#D4A94B]/15 to-[#162235] border-2 border-[#D4A94B]/60 shadow-[0_0_50px_rgba(212,169,75,0.15)]"
                  : "border border-white/8 bg-[#162235]/60"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-4 py-1.5 text-xs font-bold text-[#0E1624]">
                    <Star className="h-3 w-3 fill-[#0E1624]" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{plan.icon}</span>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-2">
                <span className="text-5xl font-black text-gold-gradient">{plan.price}</span>
                <span className="text-white/50 text-sm ml-1">zł / miesiąc</span>
              </div>

              <p className="text-xs text-[#D4A94B]/70 font-medium mb-4">{plan.savings}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-6 pb-6 border-b border-white/10">
                {plan.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#D4A94B] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#kontakt"
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

        {/* Bottom features */}
        <div className="grid gap-4 sm:grid-cols-3">
          {bottomFeatures.map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#162235]/40 px-5 py-4"
            >
              <span className="text-xl">{f.icon}</span>
              <p className="text-sm text-white/65">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-md pointer-events-auto rounded-3xl border border-white/10 bg-[#162235] shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A94B]/80 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#D4A94B]/8 to-transparent pointer-events-none" />

                <button
                  onClick={() => setModal(null)}
                  className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
                >
                  <X size={16} />
                </button>

                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{modal.icon}</span>
                    <div>
                      <h2 className="text-xl font-extrabold text-white">{modal.name}</h2>
                      <p className="text-sm text-white/50 mt-0.5">{modal.desc}</p>
                    </div>
                  </div>

                  <div className="mb-4 text-3xl font-black text-gold-gradient">{modal.price}</div>

                  <div className="h-px bg-gradient-to-r from-[#D4A94B]/20 via-white/10 to-transparent mb-5" />

                  <ul className="space-y-3 mb-8">
                    {modal.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check size={16} className="text-[#D4A94B] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/75">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#kontakt"
                    onClick={() => setModal(null)}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-4 text-base font-bold text-[#0E1624] hover:shadow-[0_0_30px_rgba(212,169,75,0.4)] transition-all hover:scale-[1.02]"
                  >
                    Zamów teraz
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
