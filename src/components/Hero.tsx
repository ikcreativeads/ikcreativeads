import { ArrowRight, Play, Phone } from "lucide-react";
import Container from "./ui/Container";
import GlowOrb from "./ui/GlowOrb";

const REEL_PREVIEWS = [
  { videoId: "5wOorJQudec", label: "Paznokcie" },
  { videoId: "xMOYd-LQYSU", label: "Barber" },
  { videoId: "wSRmpmSvSyQ", label: "Mechanik" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-32 sm:pt-40 lg:pb-32 lg:pt-48">
      <GlowOrb className="left-[-20%] top-[-15%] h-[500px] w-[500px]" color="gold" />
      <GlowOrb className="right-[-20%] top-[30%] h-[500px] w-[500px]" color="blue" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="anim-fade-up font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Tworzymy rolki{" "}
            <span className="text-[#D4A94B]">reklamowe</span>,<br />
            które przynoszą efekty.
          </h1>

          <p className="anim-fade-up delay-100 mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Profesjonalne materiały video dla firm z Podkarpacia.
            Reels, TikTok, Shorts — nagrywamy, montujemy i dostarczamy w 48h.
          </p>

          <div className="anim-fade-up delay-200 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="btn-shimmer group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-navy shadow-gold-glow transition-transform hover:scale-105 sm:w-auto"
            >
              Darmowa konsultacja
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+48513818919"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#D4A94B]/40 hover:bg-white/[0.06] sm:w-auto lg:hidden"
            >
              <Phone className="h-4 w-4 text-[#D4A94B]" />
              Zadzwoń teraz
            </a>
            <a
              href="#portfolio"
              className="group hidden w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#D4A94B]/40 hover:bg-white/[0.06] sm:w-auto lg:inline-flex"
            >
              <Play className="h-4 w-4 text-[#D4A94B]" />
              Zobacz realizacje
            </a>
          </div>

          <p className="anim-fade-up delay-300 mt-4 text-xs text-white/40">
            Pierwsza rolka od <span className="text-white/60">200 zł</span> · Bez długoterminowych zobowiązań
          </p>

          {/* Reel preview strip */}
          <div className="anim-fade-in delay-400 mt-14 flex items-end justify-center gap-3 sm:gap-4">
            {REEL_PREVIEWS.map((reel, i) => (
              <a
                key={reel.videoId}
                href="#portfolio"
                aria-label={`Realizacja: ${reel.label}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#162235] transition-all duration-500 hover:border-[#D4A94B]/40 hover:shadow-[0_0_20px_rgba(212,169,75,0.15)] ${
                  i === 1
                    ? "w-[90px] sm:w-[110px]"
                    : "w-[72px] sm:w-[88px] opacity-75 group-hover:opacity-100"
                }`}
                style={{ aspectRatio: "9/16" }}
              >
                <img
                  src={`https://img.youtube.com/vi/${reel.videoId}/maxresdefault.jpg`}
                  alt={reel.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#D4A94B]/80">
                    <Play className="ml-0.5 h-3 w-3 fill-white text-white" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="anim-fade-in delay-500 mt-10 flex items-center justify-center gap-8">
            <div>
              <p className="font-display text-2xl font-bold text-white">30+</p>
              <p className="text-xs text-white/50">materiałów video</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-white">15+</p>
              <p className="text-xs text-white/50">zadowolonych klientów</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-white">500K+</p>
              <p className="text-xs text-white/50">wyświetleń</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
