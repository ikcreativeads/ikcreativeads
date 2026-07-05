"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
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
    <section id="kontakt" className="relative section-padding border-t border-white/6">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"
        >
          {/* Left — text */}
          <div>
            <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]">
              Zacznij już dziś
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl mt-3">
              Gotowy zdobywać klientów{" "}
              <span className="text-[#D4A94B]">dzięki video?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/50 max-w-md">
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
                  <CheckCircle2 className="h-4 w-4 text-[#D4A94B] shrink-0" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-white/8 bg-[#111d2e] p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <CheckCircle2 className="h-12 w-12 text-[#D4A94B]" />
                <h3 className="text-lg font-bold text-white">Wiadomość wysłana!</h3>
                <p className="text-white/50 text-sm">Odezwiemy się do Ciebie w ciągu 24 godzin.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[#D4A94B] hover:text-white/70 transition-colors"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-white mb-6">Napisz do nas</h3>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jan Kowalski"
                    className="w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#D4A94B]/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Numer telefonu *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+48 000 000 000"
                    className="w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#D4A94B]/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Opisz czego potrzebujesz..."
                    className="w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#D4A94B]/40 focus:outline-none transition-colors resize-none"
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
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A94B] px-8 py-4 text-sm font-bold text-[#0E1624] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Umów bezpłatną konsultację
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
