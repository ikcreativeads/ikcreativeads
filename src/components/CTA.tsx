"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Loader2, Phone } from "lucide-react";
import Container from "./ui/Container";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "", source: "" });
  // Kontekst zapytania: podstrona, wybrany pakiet, UTM i referrer — trafia do Formspree razem z formularzem
  const [context, setContext] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ctx: Record<string, string> = { page: window.location.pathname };
    for (const key of ["pakiet", "utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
      const value = params.get(key);
      if (value) ctx[key] = value;
    }
    if (document.referrer && !document.referrer.includes(window.location.host)) {
      ctx.referrer = document.referrer;
    }
    setContext(ctx);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mjgdpajo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          source: form.source,
          ...context,
          _subject: `Nowe zapytanie${context.pakiet ? ` — pakiet ${context.pakiet}` : ""} (${context.page ?? "/"})`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "", source: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="relative section-padding">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#162235] to-[#243140] border border-[#D4A94B]/20 px-6 py-16 sm:px-12 sm:py-20">
          {/* Gold glow top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A94B]/60 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#D4A94B]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4A94B]/30 bg-[#D4A94B]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Zacznij już dziś
              </span>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl mt-4">
                Gotowy rozwinąć firmę{" "}
                <span className="text-gold-gradient">w internecie?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg max-w-md">
                Rolki reklamowe, strona internetowa, reklamy — powiedz nam czego potrzebujesz, a my dobierzemy najlepsze rozwiązanie dla Twojego biznesu.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Bezpłatna konsultacja bez zobowiązań",
                  "Odpowiadamy w ciągu 24h",
                  "Pierwsza rolka 200 zł: nie robi roboty — nie płacisz",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#D4A94B] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="glass-strong rounded-3xl p-6 sm:p-8" aria-live="polite">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <CheckCircle2 className="h-16 w-16 text-[#D4A94B]" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-white">Wiadomość wysłana!</h3>
                  <p className="text-white/60 text-sm">Odezwiemy się do Ciebie w ciągu 24 godzin.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-[#D4A94B] hover:text-[#F6D98C] transition-colors"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-6">
                    Napisz do nas
                  </h3>

                  <div>
                    <label htmlFor="cta-name" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jan Kowalski"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D4A94B]/50 focus:outline-none focus:bg-white/8 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-phone" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Numer telefonu *
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+48 000 000 000"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D4A94B]/50 focus:outline-none focus:bg-white/8 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-source" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Skąd o nas wiesz?
                    </label>
                    <select
                      id="cta-source"
                      name="source"
                      value={form.source}
                      onChange={(e) => setForm({ ...form, source: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#162235] px-4 py-3 text-sm text-white focus:border-[#D4A94B]/50 focus:outline-none transition-colors"
                    >
                      <option value="">Wybierz (opcjonalnie)</option>
                      <option>Google</option>
                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>Facebook</option>
                      <option>Polecenie</option>
                      <option>Wiadomość od IK Creative Ads</option>
                      <option>Inne</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cta-message" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      id="cta-message"
                      rows={3}
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Opisz czego potrzebujesz..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D4A94B]/50 focus:outline-none focus:bg-white/8 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs">
                      Coś poszło nie tak. Spróbuj ponownie lub napisz na ikcreativeads@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-8 py-4 text-base font-bold text-[#0E1624] hover:shadow-[0_0_30px_rgba(212,169,75,0.4)] transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        Umów bezpłatną konsultację
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <a
                    href="tel:+48513818919"
                    className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#D4A94B]/40 px-4 py-4 text-base font-bold text-[#D4A94B] transition-colors hover:bg-[#D4A94B]/10 active:bg-[#D4A94B]/20"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Zadzwoń: 513 818 919
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
