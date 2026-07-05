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
    name: "Widoczność",
    highlight: false,
    price: "699",
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

const bottomFeatures = [
  { icon: "✨", text: "Retusz i obróbka zdjęć zawsze w cenie" },
  { icon: "⏱️", text: "Realizacja do 48h" },
  { icon: "🏆", text: "Pierwsza rolka z gwarancją satysfakcji" },
  { icon: "🤝", text: "Ceny do negocjacji przy dłuższej współpracy" },
];

type Item = { icon: string; name: string; desc: string; price: string; details: string[] };

export default function CennikPage() {
  const [modal, setModal] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-[#0E1624] pt-28 pb-24">
      <Container>
        {/* Back link */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć na stronę główną
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#D4A94B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            IK Creative Ads · Dębica
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Pełny cennik
          </h1>
          <p className="text-white/45 text-base max-w-xl">
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
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4A94B]/20 bg-[#D4A94B]/8">
              <Clapperboard className="h-4 w-4 text-[#D4A94B]" />
            </div>
            <h2 className="text-xl font-bold text-white">Rolki reklamowe</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 max-w-2xl">
            {jednorazowe.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => setModal(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-white/8 bg-[#111d2e] p-6 group hover:border-[#D4A94B]/25 hover:bg-[#131f30] transition-colors text-left cursor-pointer w-full"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-white text-sm">{item.name}</p>
                      <p className="text-xs text-white/40 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-lg font-black text-[#D4A94B]">{item.price}</div>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[#D4A94B]/50 group-hover:text-[#D4A94B] transition-colors">
                  <ChevronRight className="h-3 w-3" />
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
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4A94B]/20 bg-[#D4A94B]/8">
              <Camera className="h-4 w-4 text-[#D4A94B]" />
            </div>
            <h2 className="text-xl font-bold text-white">Fotografia firmowa</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fotografia.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => setModal(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-white/8 bg-[#111d2e] p-5 hover:border-[#D4A94B]/25 hover:bg-[#131f30] transition-colors text-left cursor-pointer w-full group"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.name}</p>
                      <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-base font-black text-[#D4A94B]">{item.price}</div>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[#D4A94B]/50 group-hover:text-[#D4A94B] transition-colors">
                  <ChevronRight className="h-3 w-3" />
                  Dowiedz się więcej
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-16">
          <div className="w-full border-t border-white/6" />
          <div className="mt-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A94B]">
              Pakiety miesięczne
            </span>
          </div>
        </div>

        {/* Section 3 — Pakiety */}
        <div className="grid gap-4 lg:grid-cols-3 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

              <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">{plan.name}</h3>

              <div className="mb-1">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-white/40 text-sm ml-1">zł / miesiąc</span>
              </div>

              <p className="text-xs text-[#D4A94B]/60 font-medium mb-4">{plan.savings}</p>
              <p className="text-sm text-white/45 mb-6 pb-6 border-b border-white/6">
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
                href="https://ikcreativeads.pl/#kontakt"
                className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-opacity ${
                  plan.highlight
                    ? "bg-[#D4A94B] text-[#0E1624] hover:opacity-90"
                    : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
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
          className="mb-3 rounded-2xl border border-white/6 bg-[#0E1624] p-6"
        >
          <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-4">Dodatki do pakietów</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              ["Ujęcie z drona", "200 zł"],
              ["Dodatkowa rolka poza pakietem", "250 zł"],
              ["Dodatkowa sesja zdjęciowa", "250 zł"],
              ["Film wizerunkowy 60–90s", "od 600 zł"],
              ["Realizacja ekspresowa 24h", "+30%"],
            ].map(([name, price]) => (
              <div key={name} className="flex flex-col gap-1">
                <span className="text-xs text-white/35">{name}</span>
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
          className="mb-12 rounded-2xl border border-white/8 bg-[#0E1624] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-1">Usługa dodatkowa</p>
            <p className="text-base font-bold text-white">Silnik Zasięgu — prowadzenie reklam Meta Ads</p>
            <p className="text-sm text-white/40 mt-1">
              Kampanie na Facebooku i Instagramie · Targetowanie lokalne (Dębica i okolice) · Raport efektów
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-2xl font-black text-white">od 490 zł</p>
            <p className="text-xs text-white/30">/ miesiąc + budżet reklamowy</p>
          </div>
        </motion.div>

        {/* Bottom features */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bottomFeatures.map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl border border-white/6 bg-[#0E1624] px-4 py-3"
            >
              <span className="text-base">{f.icon}</span>
              <p className="text-sm text-white/50">{f.text}</p>
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
              className="fixed inset-0 z-50 bg-black/70"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-md pointer-events-auto rounded-2xl border border-white/10 bg-[#111d2e] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{modal.icon}</span>
                    <div>
                      <h2 className="text-lg font-extrabold text-white">{modal.name}</h2>
                      <p className="text-xs text-white/40 mt-0.5">{modal.desc}</p>
                    </div>
                  </div>

                  <div className="mb-4 text-3xl font-black text-[#D4A94B]">{modal.price}</div>

                  <div className="h-px bg-white/6 mb-5" />

                  <ul className="space-y-3 mb-8">
                    {modal.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check size={14} className="text-[#D4A94B] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/60">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://ikcreativeads.pl/#kontakt"
                    onClick={() => setModal(null)}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A94B] px-6 py-3.5 text-sm font-bold text-[#0E1624] hover:opacity-90 transition-opacity"
                  >
                    Zamów teraz
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
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
