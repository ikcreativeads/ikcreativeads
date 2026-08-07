import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0e1624]"
      style={{ minHeight: "100svh" }}
    >
      {/* Pionowe pasy — jak w screenie */}
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
          pointerEvents: "none",
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

      {/* Logo unoszące się */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        aria-hidden="true"
        style={{
          top: "calc(50% - 190px)",
          right: "7%",
        }}
      >
        <div
          className="animate-float"
          style={{
            width: 380,
            height: 380,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src="/logo.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Treść */}
      <div className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-14 pt-28 sm:px-10 lg:px-14 lg:pb-20 lg:pt-36">

        {/* Wielki nagłówek — lewo */}
        <h1
          className="max-w-full lg:max-w-[52%]"
          style={{
            fontFamily:
              '"Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif',
            fontWeight: 300,
            fontSize: "clamp(3rem, 9.5vw, 11rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.025em",
            color: "white",
          }}
        >
          <span className="block">tworzymy</span>
          <span className="block">rolki</span>
          <span className="block" style={{ color: "#D4A94B" }}>
            reklamowe.
          </span>
        </h1>

        {/* Logo na mobile — między nagłówkiem a CTA */}
        <div className="flex justify-start py-10 lg:hidden">
          <div
            className="animate-float"
            style={{ width: 160, height: 160, borderRadius: "50%", overflow: "hidden" }}
          >
            <img
              src="/logo.png"
              alt="IK Creative Ads"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Dół — opis + CTA */}
        <div>
          <p className="mb-7 max-w-[300px] text-sm leading-relaxed text-white/45">
            Profesjonalne materiały video dla firm z Podkarpacia. Nagrywamy,
            montujemy i dostarczamy w&nbsp;48&nbsp;godziny.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#D4A94B] px-6 py-3.5 text-sm font-semibold text-[#0e1624] transition-all hover:bg-[#E0B95C]"
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
    </section>
  );
}
