import { ArrowRight, Play, Film, Sparkles } from "lucide-react";
import Image from "next/image";
import Container from "./ui/Container";
import GlowOrb from "./ui/GlowOrb";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-44">
      {/* Background glows */}
      <GlowOrb className="left-[-10%] top-[-10%] h-[420px] w-[420px]" color="gold" />
      <GlowOrb className="right-[-15%] top-[20%] h-[500px] w-[500px]" color="blue" />
      <GlowOrb className="bottom-[-20%] left-[20%] h-[420px] w-[420px]" color="gold" />

      {/* Film strip decorative pattern */}
      <div className="film-strip-bg pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-40" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="anim-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-warm">
              <Sparkles className="h-3.5 w-3.5" />
              Agencja video premium
            </span>

            <h1 className="anim-fade-up delay-100 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Tworzymy{" "}
              <span className="text-gold-gradient">rolki reklamowe</span>,
              które przynoszą efekty.
            </h1>

            <p className="anim-fade-up delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0">
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
                href="#portfolio"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-white/[0.06] sm:w-auto"
              >
                <Play className="h-4 w-4 text-gold-warm" />
                Zobacz realizacje
              </a>
            </div>

            <div className="anim-fade-in delay-500 mt-12 flex items-center justify-center gap-8 lg:justify-start">
              <div>
                <p className="font-display text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-white/50">materiałów video</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-display text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-white/50">zadowolonych klientów</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-display text-2xl font-bold text-white">500K+</p>
                <p className="text-xs text-white/50">wyświetleń</p>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center lg:h-[520px] lg:max-w-none">
            {/* Static ring */}
            <div className="absolute hidden h-[300px] w-[300px] rounded-full border border-dashed border-gold/20 sm:block sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]" aria-hidden="true" />

            {/* Glow */}
            <div className="absolute h-48 w-48 rounded-full bg-[#D4A94B]/10 sm:h-56 sm:w-56 sm:bg-[radial-gradient(circle,rgba(246,217,140,0.25)_0%,transparent_70%)] sm:blur-2xl" aria-hidden="true" />

            {/* Central logo */}
            <div className="anim-scale-in relative z-10 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-[#D4A94B]/30 bg-[#162235] shadow-[0_0_40px_rgba(212,169,75,0.2)] sm:h-60 sm:w-60 lg:h-72 lg:w-72">
              <Image
                src="/logo-square.jpg"
                alt="IK Creative Ads"
                width={280}
                height={280}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="glass absolute -left-2 top-6 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:left-2 sm:top-8 sm:flex">
              <Film className="h-5 w-5 text-gold-warm" />
              <div>
                <p className="text-xs font-semibold text-white">Reels Instagram</p>
                <p className="text-[10px] text-white/50">+180% zasięgu</p>
              </div>
            </div>

            <div className="glass absolute bottom-10 right-0 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:bottom-16 sm:right-2 sm:flex">
              <Sparkles className="h-5 w-5 text-gold-warm" />
              <div>
                <p className="text-xs font-semibold text-white">TikTok Ads</p>
                <p className="text-[10px] text-white/50">120 leadów / kampania</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
