import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0e1624]" style={{ minHeight: "100svh" }}>

      {/* Decorative rings */}
      <div
        className="pointer-events-none absolute right-[25%] top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[520px] w-[520px] rounded-full border border-white/[0.05]" />
        <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col lg:flex-row">

        {/* ── LEWA: nagłówek + CTA ── */}
        <div className="flex flex-1 flex-col justify-center px-6 py-24 sm:px-10 lg:w-[48%] lg:px-16 lg:py-0 lg:pt-28">
          <div className="lg:my-auto">

          {/* Wielki headline */}
          <h1
            className="font-display font-black leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(3rem, 7.5vw, 8rem)" }}
          >
            <span className="block">tworzymy</span>
            <span className="block">rolki</span>
            <span className="block" style={{ color: "#D4A94B" }}>reklamowe.</span>
          </h1>

          {/* Body + CTA */}
          <div className="mt-10">
            <p className="max-w-[280px] text-sm leading-relaxed text-white/45">
              Profesjonalne materiały video dla firm z Podkarpacia.
              Nagrywamy, montujemy i dostarczamy w&nbsp;48&nbsp;godziny.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#D4A94B] px-6 py-3.5 text-sm font-bold text-[#0e1624] transition-all hover:bg-[#E0B95C]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0e1624]/20">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
                Darmowa konsultacja
              </a>
              <a
                href="#portfolio"
                className="text-sm font-medium text-white/40 transition-colors hover:text-white"
              >
                Zobacz realizacje
              </a>
            </div>
          </div>
          </div>
        </div>

        {/* ── PRAWA: wizuał ── */}
        <div className="relative h-64 overflow-hidden lg:h-auto lg:flex-1">
          <img
            src="https://images.unsplash.com/photo-1619099619226-f96e319e3732?auto=format&fit=crop&w=1920&q=85"
            alt="Profesjonalna kamera filmowa — IK Creative Ads"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1624] via-[#0e1624]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e1624] lg:hidden" />
        </div>

      </div>
    </section>
  );
}
