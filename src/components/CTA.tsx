"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Lightbulb, Sparkles } from "lucide-react";
import Container from "./ui/Container";

export default function CTA() {
  return (
    <section id="kontakt" className="relative section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gold-gradient px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24"
        >
          {/* Decorative icons */}
          <Camera
            className="absolute -left-6 -top-6 h-32 w-32 text-navy/10 sm:h-40 sm:w-40"
            strokeWidth={1}
            aria-hidden="true"
          />
          <Lightbulb
            className="absolute -bottom-8 -right-4 h-32 w-32 text-navy/10 sm:h-44 sm:w-44"
            strokeWidth={1}
            aria-hidden="true"
          />

          <motion.div
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-navy/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy">
              <Sparkles className="h-3.5 w-3.5" />
              Zacznij już dziś
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Gotowy zdobywać klientów dzięki video?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy/70 sm:text-lg">
              Umów bezpłatną konsultację i dowiedz się, jak rolki reklamowe
              mogą zwiększyć zasięgi i sprzedaż Twojej firmy.
            </p>
            <div className="mt-10">
              <a
                href="mailto:ikcreativeads@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-bold text-white shadow-2xl transition-transform hover:scale-105"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
