"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Eye,
  X,
} from "lucide-react";
import Container from "./ui/Container";
import YouTubeEmbed from "./ui/YouTubeEmbed";

/* ─── Realizacje z gabinetów (te same filmy co w /portfolio) ─── */
const REELS = [
  { videoId: "pVyOKWJKGrk", label: "Kosmetologia", title: "Zabieg na twarz — Mielec" },
  { videoId: "5brwXpCXqMY", label: "Kosmetologia", title: "Kosmetolog mówi do kamery" },
  { videoId: "_QUNaurcqYo", label: "Kosmetologia", title: "Wnętrze gabinetu" },
  { videoId: "LAggsiBsjVg", label: "Kosmetologia", title: "Strefa komfortu" },
  { videoId: "mysvLz8oBBQ", label: "Fizjoterapia", title: "Terapia w gabinecie" },
  { videoId: "5wOorJQudec", label: "Paznokcie", title: "Stylizacja paznokci" },
];

const WHY = [
  {
    icon: Smartphone,
    title: "Klientka wybiera gabinet w telefonie",
    desc: "Zanim zadzwoni, sprawdza Instagram, TikToka i opinie. Jeśli zobaczy u Ciebie tylko plakaty z cennikiem, wybierze gabinet, który pokazuje się na wideo.",
  },
  {
    icon: Eye,
    title: "Zabieg trudno opisać, łatwo pokazać",
    desc: "30 sekund z gabinetu mówi więcej niż opis na stronie: jak wygląda zabieg, ile trwa, jak jest u Ciebie w środku i kto będzie go wykonywał.",
  },
  {
    icon: Sparkles,
    title: "Opinie mówią, że jest dobrze — rolka pokazuje jak",
    desc: "Masz zadowolone klientki i dobre opinie w Google. Rolka zamienia to w coś, co nowa osoba może zobaczyć w 30 sekund, przewijając telefon wieczorem.",
  },
];

const IDEAS = [
  { title: "Zabieg krok po kroku", desc: "Od powitania do efektu. Klientka wie, czego się spodziewać, i mniej się boi." },
  { title: "Ekspertka mówi do kamery", desc: "Odpowiedź na pytanie, które klientki zadają najczęściej. Bez scenariusza do nauki — pytamy, Ty odpowiadasz." },
  { title: "Wnętrze i atmosfera", desc: "Gabinet, w którym chce się odpocząć. Pokazujemy miejsce, zanim klientka przyjdzie." },
  { title: "Nowy zabieg lub sezon", desc: "Wprowadzasz nowość, robisz akcję z voucherami na święta — jedna rolka na start." },
  { title: "Kulisy dnia w gabinecie", desc: "Przygotowanie, sprzęt, zespół. Ludzie wybierają ludzi, nie logo." },
  { title: "Przed i po", desc: "Tylko za zgodą klientki i bez obietnic efektów — sam zabieg i jego przebieg." },
];

const STEPS = [
  { title: "Krótka rozmowa", desc: "Telefon na 15 minut: jakie zabiegi chcesz pokazać i kiedy możemy przyjechać." },
  { title: "Nagranie u Ciebie", desc: "Przyjeżdżamy do gabinetu. Około godziny na rolkę. Nie musisz niczego przygotowywać ani uczyć się tekstu." },
  { title: "Montaż w 48 h", desc: "Cięcia, napisy, muzyka i kolory. Gotowa rolka w formacie na Instagram, Facebook i TikTok." },
  { title: "Publikujesz", desc: "Dostajesz gotowe pliki. W pakiecie Wzrost i Partner dokładamy plan publikacji." },
];

const PRICES = [
  { name: "Pierwsza rolka", price: "200 zł", note: "jednorazowo, z gwarancją", highlight: true },
  { name: "Widoczność", price: "699 zł/mc", note: "4 rolki miesięcznie" },
  { name: "Wzrost", price: "1 199 zł/mc", note: "8 rolek + sesja zdjęciowa" },
  { name: "Partner", price: "1 799 zł/mc", note: "12 rolek + dron + 2 sesje" },
];

const FAQ = [
  {
    q: "Czy klientki muszą występować w rolce?",
    a: "Nie. Nagrywamy tylko osoby, które się na to zgodzą. Zabieg można pokazać na kimś z zespołu albo na osobie, którą sama zaprosisz.",
  },
  {
    q: "Nie umiem mówić do kamery.",
    a: "Nie musisz. Zadajemy pytania, a Ty odpowiadasz jak klientce. Z kilku podejść wybieramy najlepsze i montujemy tak, żeby brzmiało naturalnie.",
  },
  {
    q: "Czy nagranie zablokuje mi pracę gabinetu?",
    a: "Umawiamy konkretne okno, najczęściej przed otwarciem albo między wizytami. Na jedną rolkę wystarcza około godziny.",
  },
  {
    q: "Prowadzę gabinet lekarski. Czy mogę mieć takie rolki?",
    a: "Tak, ale lekarzy obowiązują ograniczenia reklamy. W takich gabinetach robimy materiały informacyjne — o zabiegu, o gabinecie, o tym, jak wygląda wizyta — bez obietnic efektów i bez promocji cenowych.",
  },
  {
    q: "Gdzie dojeżdżacie?",
    a: "Jesteśmy z Dębicy. Najczęściej nagrywamy w Dębicy, Rzeszowie, Tarnowie, Mielcu, Ropczycach, Jaśle i Krośnie. Dalej — zapytaj, ustalimy.",
  },
];

export default function GabinetyPage() {
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#D4A94B]/8 blur-[120px]" />
        </div>

        <Container className="relative">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-[#D4A94B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Strona główna
          </a>

          <div className="anim-fade-up max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-[#D4A94B]/30 bg-[#D4A94B]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]">
              Dla gabinetów
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mt-3">
              Rolki reklamowe dla{" "}
              <span className="text-gold-gradient">gabinetów kosmetologii i fizjoterapii</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              Nagrywamy u Ciebie w gabinecie — około godziny na rolkę, bez scenariusza do nauki. Gotowy film dostajesz w 48 godzin. Dębica, Rzeszów, Tarnów, Mielec i okolice.
            </p>

            <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-[#D4A94B]/25 bg-[#D4A94B]/8 px-5 py-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A94B]" aria-hidden="true" />
              <p className="text-sm text-white/80">
                <strong className="text-white">Pierwsza rolka 200 zł z gwarancją.</strong> Jeśli uznasz, że nie robi roboty — nie płacisz.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-7 py-3.5 text-sm font-bold text-[#0E1624] transition-transform hover:scale-105"
              >
                Bezpłatna wycena
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+48513818919"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#D4A94B]/40 px-7 py-3.5 text-sm font-bold text-[#D4A94B] transition-colors hover:bg-[#D4A94B]/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Zadzwoń: 513 818 919
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Dlaczego ── */}
      <section className="py-16 border-t border-white/6">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Dlaczego gabinet potrzebuje rolek
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-white/8 bg-[#162235]/60 p-6">
                <Icon className="h-6 w-6 text-[#D4A94B]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Realizacje ── */}
      <section className="py-16 border-t border-white/6">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Rolki, które nagraliśmy w gabinetach
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            Cztery pierwsze to jeden dzień nagrań w gabinecie kosmetologii w Mielcu. Kliknij, żeby obejrzeć.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {REELS.map((reel) => (
              <button
                key={reel.videoId}
                type="button"
                onClick={() => setActiveEmbed(reel.videoId)}
                className="group relative overflow-hidden rounded-3xl border border-white/5 text-left"
                aria-label={`Obejrzyj: ${reel.title}`}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${reel.videoId}/hqdefault.jpg`}
                    alt={reel.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624] via-[#0e1624]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] sm:h-14 sm:w-14">
                      <Play className="ml-1 h-5 w-5 fill-[#0e1624] text-[#0e1624]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="mb-1.5 inline-block rounded-full border border-[#D4A94B]/30 bg-[#0e1624]/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#E0B95C]">
                      {reel.label}
                    </span>
                    <p className="text-sm font-bold text-white leading-snug">{reel.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Pomysły ── */}
      <section className="py-16 border-t border-white/6">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Co możemy nagrać w Twoim gabinecie
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IDEAS.map((idea) => (
              <div key={idea.title} className="flex gap-3 rounded-2xl border border-white/8 p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A94B]" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white">{idea.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{idea.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Jak to wygląda ── */}
      <section className="py-16 border-t border-white/6">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Jak to wygląda
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="rounded-3xl border border-white/8 bg-[#162235]/60 p-6">
                <span className="font-display text-3xl font-extrabold text-[#D4A94B]">{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Cennik ── */}
      <section className="py-16 border-t border-white/6">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ile to kosztuje
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            Zacznij od jednej rolki. Jeśli się sprawdzi, przejdź na pakiet — te same rolki co miesiąc, taniej za sztukę.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRICES.map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl border p-6 ${
                  p.highlight ? "border-[#D4A94B]/50 bg-[#D4A94B]/10" : "border-white/8 bg-[#162235]/60"
                }`}
              >
                <h3 className="font-bold text-white">{p.name}</h3>
                <p className="mt-2 font-display text-3xl font-extrabold text-[#D4A94B]">{p.price}</p>
                <p className="mt-1 text-sm text-white/60">{p.note}</p>
              </div>
            ))}
          </div>
          <a
            href="/cennik"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4A94B] hover:text-[#F6D98C]"
          >
            Pełny cennik i zakres pakietów
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 border-t border-white/6">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Częste pytania
          </h2>
          <div className="mt-8 max-w-3xl space-y-3">
            {FAQ.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/8 bg-[#162235]/60 p-5">
                <summary className="cursor-pointer list-none font-bold text-white marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Modal z wideo ── */}
      <AnimatePresence>
        {activeEmbed && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEmbed(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative w-full max-w-sm pointer-events-auto">
                <button
                  onClick={() => setActiveEmbed(null)}
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:text-[#D4A94B] z-10"
                  aria-label="Zamknij wideo"
                >
                  <X size={18} aria-hidden="true" />
                </button>
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-[#D4A94B]/20"
                  style={{ aspectRatio: "9/16" }}
                >
                  <YouTubeEmbed videoId={activeEmbed} className="absolute inset-0 h-full w-full" />
                </div>
                <a
                  href="#kontakt"
                  onClick={() => setActiveEmbed(null)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-3 text-sm font-bold text-[#0E1624]"
                >
                  Chcę taką rolkę
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
