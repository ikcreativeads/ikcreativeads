import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0e1624]"
      style={{ minHeight: "100svh" }}
    >
      {/* Pionowe pasy */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 119px, rgba(255,255,255,0.045) 119px, rgba(255,255,255,0.045) 120px)",
        }}
      />

      {/* Dekoracyjne okręgi */}
      <div
        className="pointer-events-none absolute"
        aria-hidden="true"
        style={{
          top: "50%",
          left: "52%",
          transform: "translate(-50%, -50%)",
          width: 660,
          height: 660,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 990,
            height: 990,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.035)",
          }}
        />
      </div>

      {/* Logo desktop */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        aria-hidden="true"
        style={{ top: "calc(50% - 190px)", right: "7%" }}
      >
        <div
          className="animate-float"
          style={{ width: 380, height: 380, borderRadius: "50%", overflow: "hidden" }}
        >
          <img
            src="/logo.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Treść */}
      <div className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-20 pt-24 sm:px-10 lg:px-14 lg:pb-20 lg:pt-36">

        {/* Nagłówek */}
        <h1
          className="max-w-full lg:max-w-[52%]"
          style={{
            fontFamily: '"Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: "clamp(2.75rem, 9.5vw, 11rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
            color: "white",
          }}
        >
          <span className="block">rozrastamy</span>
          <span className="block">twoją firmę</span>
          <span className="block" style={{ color: "#D4A94B" }}>
            w internecie.
          </span>
        </h1>

        {/* Logo mobile */}
        <div className="flex justify-start py-8 lg:hidden">
          <div
            className="animate-float"
            style={{ width: 140, height: 140, borderRadius: "50%", overflow: "hidden" }}
          >
            <img
              src="/logo.png"
              alt="IK Creative Ads"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Opis + CTA */}
        <div>
          <p className="mb-7 max-w-[300px] text-sm leading-relaxed text-white/45">
            Rolki reklamowe, strony WWW i social media dla firm z Podkarpacia.
            Dostarczamy w&nbsp;48&nbsp;godzin.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA — portfolio */}
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#D4A94B] px-6 py-3.5 text-sm font-semibold text-[#0e1624] transition-all hover:bg-[#E0B95C] active:scale-95"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0e1624]/20">
                <ArrowUpRight className="h-3 w-3" />
              </span>
              Zobacz portfolio
            </a>
            {/* Secondary CTA — wycena */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white"
            >
              Bezpłatna wycena
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
