"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E1624] pb-24 pt-36 lg:pb-32 lg:pt-48">
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/6" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Lewa kolumna — tekst */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A94B]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Agencja video — Dębica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Rolki które{" "}
              <span className="text-[#D4A94B]">sprzedają.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50"
            >
              Tworzymy profesjonalne rolki reklamowe na Reels, TikTok i Shorts.
              Gotowy materiał w 48h — bez zbędnych formalności.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4A94B] px-7 py-3.5 text-sm font-bold text-[#0E1624] transition-opacity hover:opacity-90"
              >
                Darmowa konsultacja
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition-colors hover:text-white"
              >
                <Play className="h-4 w-4" />
                Zobacz realizacje
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex items-center gap-10 border-t border-white/6 pt-10"
            >
              {[
                { value: "30+", label: "realizacji" },
                { value: "15+", label: "klientów" },
                { value: "500K+", label: "wyświetleń" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-0.5 text-xs text-white/35">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Prawa kolumna — logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-72 w-72 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full border border-white/8" />
              <div className="absolute inset-4 rounded-full border border-white/5" />
              <div className="absolute inset-8 overflow-hidden rounded-full border border-[#D4A94B]/20">
                <Image
                  src="/logo-square.jpg"
                  alt="IK Creative Ads"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
