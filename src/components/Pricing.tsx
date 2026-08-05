import { Check, Star, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const plans = [
  {
    name: "Widoczność",
    icon: "🌱",
    highlight: false,
    price: "699",
    period: "/ miesiąc",
    savings: "Zamiast 800 zł — oszczędzasz 101 zł",
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
    icon: "⭐",
    highlight: true,
    price: "1199",
    period: "/ miesiąc",
    savings: "Zamiast 1600 zł — oszczędzasz 401 zł",
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
    icon: "👑",
    highlight: false,
    price: "1799",
    period: "/ miesiąc",
    savings: "Zamiast 2800 zł — oszczędzasz 1001 zł",
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
    <section id="cennik" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4A94B]/3 to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          title={
            <>
              Pakiety miesięczne{" "}
              <span className="text-[#D4A94B]">dopasowane do Ciebie</span>
            </>
          }
          description="Regularna współpraca to niższe koszty i lepsze efekty. Wybierz pakiet i zacznij budować markę przez video."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#D4A94B]/15 to-[#162235] border-2 border-[#D4A94B]/60 shadow-[0_0_50px_rgba(212,169,75,0.15)]"
                  : "border border-white/8 bg-[#162235]/60"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
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
                <span className="text-5xl font-black text-[#D4A94B]">{plan.price}</span>
                <span className="text-white/50 text-sm ml-1">zł{plan.period}</span>
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
            </div>
          ))}
        </div>

        {/* Dodatki */}
        <div
          className="reveal mt-10 rounded-2xl border border-white/8 bg-[#162235]/40 p-6"
          style={{ transitionDelay: "150ms" }}
        >
          <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-4">Dodatki do pakietów</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ["Ujęcie z drona", "200 zł"],
              ["Dodatkowa rolka poza pakietem", "250 zł"],
              ["Dodatkowa sesja zdjęciowa", "250 zł"],
              ["Film wizerunkowy 60–90s", "od 600 zł"],
              ["Realizacja ekspresowa 24h", "+30%"],
            ].map(([name, price]) => (
              <div key={name} className="flex flex-col gap-0.5">
                <span className="text-xs text-white/50">{name}</span>
                <span className="text-sm font-bold text-white">{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meta Ads */}
        <div
          className="reveal mt-4 rounded-2xl border border-[#D4A94B]/25 bg-gradient-to-r from-[#D4A94B]/8 to-transparent p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ transitionDelay: "200ms" }}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#D4A94B] uppercase mb-1">Usługa dodatkowa</p>
            <p className="text-base font-bold text-white">Silnik Zasięgu — prowadzenie reklam Meta Ads</p>
            <p className="text-sm text-white/55 mt-1">
              Kampanie na Facebooku i Instagramie · Targetowanie lokalne (Dębica i okolice) · Raport zasięgów
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-2xl font-black text-[#D4A94B]">od 490 zł</p>
            <p className="text-xs text-white/40">/ miesiąc + budżet reklamowy</p>
          </div>
        </div>

        {/* Bottom notes */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/50">
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
