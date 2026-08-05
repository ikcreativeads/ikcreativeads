import { ArrowRight, Play, Phone } from "lucide-react";
import Container from "./ui/Container";
import GlowOrb from "./ui/GlowOrb";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44">
      <GlowOrb className="left-[-10%] top-[-10%] h-[420px] w-[420px]" color="gold" />
      <GlowOrb className="right-[-15%] top-[20%] h-[500px] w-[500px]" color="blue" />

      <div className="film-strip-bg pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-40" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="anim-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-warm">
              Agencja video premium
            </span>

            <h1 className="anim-fade-up delay-100 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Tworzymy rolki{" "}
              <span className="text-[#D4A94B]">reklamowe</span>,{" "}
              które przynoszą efekty.
            </h1>

            <p className="anim-fade-up delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
              Pomagamy firmom zdobywać klientów dzięki profesjonalnym
              materiałom video tworzonym pod social media — Reels, TikTok i
              Shorts, które realnie zwiększają zasięgi i sprzedaż.
            </p>

            <div className="anim-fade-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#kontakt"
                className="btn-shimmer group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-navy shadow-gold-glow transition-transform hover:scale-105 sm:w-auto"
              >
                Darmowa konsultacja
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+48513818919"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-white/[0.06] sm:w-auto lg:hidden"
              >
                <Phone className="h-4 w-4 text-gold-warm" />
                Zadzwoń teraz
              </a>
              <a
                href="#portfolio"
                className="group hidden w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-white/[0.06] sm:w-auto lg:inline-flex"
              >
                <Play className="h-4 w-4 text-gold-warm" />
                Zobacz realizacje
              </a>
            </div>

            <p className="anim-fade-up delay-300 mt-4 text-center text-xs text-white/40 lg:text-left">
              Pierwsza rolka od <span className="text-white/65">200 zł</span> · Bez długoterminowych zobowiązań
            </p>

            <div className="anim-fade-in delay-500 mt-10 flex items-center justify-center gap-8 lg:justify-start">
              <div>
                <p className="font-display text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-white/65">materiałów video</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-display text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-white/65">zadowolonych klientów</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-display text-2xl font-bold text-white">500K+</p>
                <p className="text-xs text-white/65">wyświetleń</p>
              </div>
            </div>
          </div>

          {/* Right: phone mockup with real reel */}
          <div className="relative mx-auto flex justify-center lg:justify-end" aria-hidden="true">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-80 w-80 rounded-full bg-[#D4A94B]/6 blur-[80px]" />
            </div>

            <div className="anim-scale-in relative z-10 w-[200px] sm:w-[220px] lg:w-[250px]">
              <div
                className="relative overflow-hidden rounded-[2.5rem] border border-[#D4A94B]/20 bg-[#0e1624]"
                style={{
                  aspectRatio: "9/16",
                  boxShadow: "0 0 0 6px rgba(14,22,36,0.7), 0 0 60px rgba(212,169,75,0.10)",
                }}
              >
                {/* Notch */}
                <div className="absolute left-1/2 top-3 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#0e1624]" />

                {/* Thumbnail */}
                <img
                  src="https://img.youtube.com/vi/xMOYd-LQYSU/maxresdefault.jpg"
                  alt="Realizacja — Bunkier Barber Dębica"
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624]/85 via-[#0e1624]/10 to-transparent" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] shadow-[0_0_24px_rgba(212,169,75,0.5)]">
                    <Play className="ml-1 h-6 w-6 fill-[#0e1624] text-[#0e1624]" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E0B95C]">
                    Barber · Dębica
                  </span>
                  <p className="mt-0.5 text-sm font-bold text-white">Bunkier Barber</p>
                  <p className="mt-1 text-[10px] text-white/55">Realizacja IK Creative Ads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
