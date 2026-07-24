"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Palette,
  X,
} from "lucide-react";
import Container from "./ui/Container";

type Feature = {
  icon: React.ElementType;
  title: string;
  desc: string;
  details: string[];
};

const features: Feature[] = [
  {
    icon: Smartphone,
    title: "Responsywna na telefon",
    desc: "Ponad 70% ruchu pochodzi z telefonów. Każda strona działa idealnie na każdym urządzeniu.",
    details: [
      "Testujemy na iPhone, Android i tabletach",
      "Menu mobilne, przyciski i formularze dopasowane do dotyku",
      "Obrazki i wideo ładowane w odpowiedniej rozdzielczości",
      "Google premiuje strony responsywne w wynikach wyszukiwania",
    ],
  },
  {
    icon: Zap,
    title: "Błyskawiczne ładowanie",
    desc: "Szybkość strony = więcej klientów. Optymalizujemy każdy element pod czas ładowania.",
    details: [
      "Wynik PageSpeed powyżej 90/100",
      "Kompresja obrazków i plików CSS/JS",
      "Lazy loading — ładuje tylko to, co widać",
      "Strona gotowa w mniej niż 2 sekundy",
    ],
  },
  {
    icon: Search,
    title: "SEO od pierwszego dnia",
    desc: "Strona zoptymalizowana pod Google — właściwe nagłówki, meta tagi i sitemap gotowe od razu.",
    details: [
      "Nagłówki H1–H3 z odpowiednimi słowami kluczowymi",
      "Meta tytuły i opisy dla każdej podstrony",
      "Schema.org — Google rozumie Twoją firmę lepiej",
      "Sitemap.xml i robots.txt gotowe automatycznie",
    ],
  },
  {
    icon: Palette,
    title: "Projekt dopasowany do marki",
    desc: "Żadnych gotowych szablonów. Projekt graficzny tworzony od zera pod Twój biznes.",
    details: [
      "Projekt na podstawie Twoich kolorów i logo",
      "Makieta do akceptacji przed kodowaniem",
      "Typografia i ikonografia spójna z branżą",
      "Efekty hover, animacje i przejścia premium",
    ],
  },
  {
    icon: ShieldCheck,
    title: "SSL i bezpieczeństwo",
    desc: "HTTPS, ochrona przed spamem i kopie zapasowe — bezpiecznie dla Ciebie i klientów.",
    details: [
      "Certyfikat SSL (kłódka w pasku adresu) gratis",
      "Formularz kontaktowy z ochroną antyspamową",
      "Regularne kopie zapasowe strony",
      "Aktualizacje systemu CMS w cenie utrzymania",
    ],
  },
  {
    icon: Globe,
    title: "Domena i hosting",
    desc: "Zajmujemy się całą techniką — domena, serwer, poczta firmowa. Ty skupiasz się na biznesie.",
    details: [
      "Pomoc przy wyborze i rejestracji domeny",
      "Serwer w Polsce — szybkość i zgodność z RODO",
      "Poczta firmowa (imie@twojafirma.pl)",
      "Wsparcie techniczne po wdrożeniu strony",
    ],
  },
];

const packages = [
  {
    icon: "🪟",
    name: "Landing Page",
    desc: "Jedna mocna strona sprzedażowa",
    price: "od 699 zł",
    highlight: false,
    features: [
      "Projekt graficzny od zera",
      "1 strona (hero, oferta, opinie, kontakt)",
      "Formularz kontaktowy",
      "Responsywność na telefon i tablet",
      "Podstawowe SEO + SSL",
      "Czas realizacji: do 7 dni",
    ],
  },
  {
    icon: "🏢",
    name: "Strona firmowa",
    desc: "Pełna wizytówka Twojej firmy",
    price: "od 1 299 zł",
    highlight: true,
    features: [
      "Projekt graficzny od zera",
      "Do 5 podstron (Start, Oferta, O nas, Cennik, Kontakt)",
      "Blog lub aktualności",
      "Google Maps + dane kontaktowe",
      "Responsywność + SSL + SEO",
      "Panel do samodzielnej edycji treści",
      "Czas realizacji: do 14 dni",
    ],
  },
  {
    icon: "🛒",
    name: "Sklep internetowy",
    desc: "Sprzedawaj online 24/7",
    price: "od 2 499 zł",
    highlight: false,
    features: [
      "Projekt graficzny od zera",
      "Nieograniczona liczba produktów",
      "Płatności online (BLIK, karta, przelew)",
      "Zarządzanie zamówieniami i magazynem",
      "Integracja z InPost i kurierami",
      "Responsywność + SSL + SEO",
      "Czas realizacji: do 21 dni",
    ],
  },
];

const steps = [
  { num: "01", title: "Bezpłatna konsultacja", desc: "Rozmawiamy o Twojej firmie, celu strony i grupie docelowej. Bez zobowiązań." },
  { num: "02", title: "Projekt i makieta", desc: "Pokazujemy projekt graficzny do akceptacji przed przystąpieniem do kodowania." },
  { num: "03", title: "Realizacja", desc: "Budujemy stronę i regularnie informujemy o postępach. Twoja opinia na każdym etapie." },
  { num: "04", title: "Wdrożenie i przekazanie", desc: "Uruchamiamy stronę, szkolimy z obsługi i jesteśmy dostępni po wdrożeniu." },
];

export default function StronaInternetowaPage() {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1624] via-[#162235] to-[#0E1624] pt-28 pb-24">
      <Container>

        {/* Back */}
        <a
          href="/"
          className="anim-fade-up inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#D4A94B] transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć na stronę główną
        </a>

        {/* Hero */}
        <div className="anim-fade-up delay-100 mb-20 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#D4A94B]/30 bg-[#D4A94B]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]">
            Nowa usługa
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Strony internetowe{" "}
            <span className="text-gold-gradient">dla Twojej firmy</span>
          </h1>
          <p className="mt-6 text-lg text-white/55 leading-relaxed max-w-2xl">
            Twoja firma zasługuje na stronę, która działa na telefonie, ładuje się w 2 sekundy i pojawia się wysoko w Google. Projektujemy i budujemy strony od zera — bez gotowych szablonów, bez ukrytych kosztów.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-7 py-3.5 text-sm font-bold text-[#0E1624] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,169,75,0.3)]"
            >
              Bezpłatna wycena
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pakiety"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:border-white/30 transition-colors"
            >
              Zobacz ceny
            </a>
          </div>
        </div>

        {/* Dlaczego strona WWW */}
        <div className="reveal mb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#D4A94B] uppercase mb-3">Dlaczego warto?</p>
          <h2 className="text-2xl font-bold text-white">
            Strona internetowa to Twój sprzedawca pracujący 24/7
          </h2>
          <p className="mt-3 text-white/50 max-w-2xl leading-relaxed">
            95% klientów szuka firm w Google zanim zadzwoni. Jeśli nie masz strony — nie istniejesz dla połowy potencjalnych klientów. Jeśli masz przestarzałą stronę — tracisz ich na rzecz konkurencji.
          </p>
        </div>

        {/* Feature cards — klikalne */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => setActiveFeature(f)}
              className="reveal text-left rounded-2xl border border-white/8 bg-[#162235]/60 p-6 hover:border-[#D4A94B]/30 transition-colors group cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A94B]/10 border border-[#D4A94B]/20 group-hover:bg-[#D4A94B]/20 transition-colors">
                <f.icon className="h-5 w-5 text-[#D4A94B]" />
              </div>
              <h3 className="font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#D4A94B]/50 group-hover:text-[#D4A94B] transition-colors">
                Dowiedz się więcej →
              </span>
            </button>
          ))}
        </div>

        {/* Pakiety */}
        <div id="pakiety" className="relative mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0E1624] px-6 text-sm font-bold tracking-[0.2em] uppercase text-[#D4A94B]">
              Pakiety i ceny
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-16">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 ${
                pkg.highlight
                  ? "bg-gradient-to-b from-[#D4A94B]/15 to-[#162235] border-2 border-[#D4A94B]/60 shadow-[0_0_50px_rgba(212,169,75,0.15)]"
                  : "border border-white/8 bg-[#162235]/60"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-4 py-1.5 text-xs font-bold text-[#0E1624]">
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{pkg.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-white/45">{pkg.desc}</p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-3xl font-black text-gold-gradient">{pkg.price}</span>
                <p className="text-xs text-white/35 mt-1">jednorazowo · płatność po akceptacji projektu</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#D4A94B] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#kontakt"
                className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] text-[#0E1624] hover:shadow-[0_0_30px_rgba(212,169,75,0.4)] hover:scale-105"
                    : "border border-[#D4A94B]/40 text-[#D4A94B] hover:bg-[#D4A94B]/10"
                }`}
              >
                Zamów wycenę
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Jak to działa */}
        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0E1624] px-6 text-sm font-bold tracking-[0.2em] uppercase text-[#D4A94B]">
              Jak to działa
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="reveal rounded-2xl border border-white/8 bg-[#162235]/60 p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 text-3xl font-black text-gold-gradient leading-none">{s.num}</div>
              <h3 className="font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Combo z rolkami */}
        <div className="reveal rounded-3xl border border-[#D4A94B]/25 bg-gradient-to-r from-[#D4A94B]/8 to-transparent p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-2">Połącz usługi</p>
            <h3 className="text-xl font-bold text-white mb-2">Strona + rolki reklamowe = pełna obecność online</h3>
            <p className="text-sm text-white/55 max-w-lg leading-relaxed">
              Zamów stronę internetową razem z pakietem rolek reklamowych i otrzymaj <strong className="text-white">10% rabatu</strong> na obie usługi. Strona przyciąga klientów z Google, rolki — z social media.
            </p>
          </div>
          <a
            href="/#kontakt"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-7 py-3.5 text-sm font-bold text-[#0E1624] hover:scale-105 transition-transform"
          >
            Zapytaj o pakiet combo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </Container>

      {/* Modal — feature details */}
      <AnimatePresence>
        {activeFeature && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)}
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
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
                >
                  <X size={16} />
                </button>

                <div className="relative p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A94B]/10 border border-[#D4A94B]/20">
                    <activeFeature.icon className="h-6 w-6 text-[#D4A94B]" />
                  </div>
                  <h2 className="text-xl font-extrabold text-white mb-2">{activeFeature.title}</h2>
                  <p className="text-sm text-white/50 mb-6">{activeFeature.desc}</p>

                  <div className="h-px bg-gradient-to-r from-[#D4A94B]/20 via-white/10 to-transparent mb-6" />

                  <ul className="space-y-3 mb-8">
                    {activeFeature.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check size={16} className="text-[#D4A94B] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/75">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#kontakt"
                    onClick={() => setActiveFeature(null)}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-4 text-base font-bold text-[#0E1624] hover:shadow-[0_0_30px_rgba(212,169,75,0.4)] transition-all hover:scale-[1.02]"
                  >
                    Zapytaj o wycenę
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
