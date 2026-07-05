"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import Container from "./ui/Container";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

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
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
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
                <Sparkles className="h-3.5 w-3.5" />
                Zacznij już dziś
              </span>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl mt-4">
                Gotowy zdobywać klientów dzięki{" "}
                <span className="text-gold-gradient">video?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg max-w-md">
                Umów bezpłatną konsultację i dowiedz się, jak rolki reklamowe
                mogą zwiększyć zasięgi i sprzedaż Twojej firmy.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Bezpłatna konsultacja bez zobowiązań",
                  "Odpowiadamy w ciągu 24h",
                  "Wycena dopasowana do Twojego budżetu",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#D4A94B] shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="glass-strong rounded-3xl p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <CheckCircle2 className="h-16 w-16 text-[#D4A94B]" />
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
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jan Kowalski"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D4A94B]/50 focus:outline-none focus:bg-white/8 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Numer telefonu *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+48 000 000 000"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D4A94B]/50 focus:outline-none focus:bg-white/8 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      rows={3}
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
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        Umów bezpłatną konsultację
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
