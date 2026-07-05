"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Container from "./ui/Container";

const LINE_ONE = ["Rolki", "które"];
const LINE_TWO = "sprzedają.";

const wordVariant = {
  hidden: { opacity: 0, y: 40, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const reducedVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E1624] pb-20 pt-32 lg:pb-28 lg:pt-44">
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/6" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">

          {/* Lewa kolumna */}
          <div className="max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 flex items-center gap-2.5"
            >
              <span className="h-px w-8 bg-[#D4A94B]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A94B]/70">
                Agencja video · Dębica
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(3.5rem,9vw,6.5rem)] font-black leading-[0.95] tracking-tight text-white">
              <span className="block overflow-hidden">
                <span className="flex flex-wrap gap-x-[0.25em]">
                  {LINE_ONE.map((word, i) => (
                    <motion.span
                      key={word}
                      custom={i}
                      variants={wordVariant}
                      initial="hidden"
                      animate="visible"
                      className="inline-block motion-reduce:transition-none"
                      style={{ display: "inline-block" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span
                  custom={LINE_ONE.length}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-[#D4A94B] motion-reduce:transition-none"
                  style={{ display: "inline-block" }}
                >
                  {LINE_TWO}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 max-w-md text-base leading-relaxed text-white/45 sm:text-lg"
            >
              Reels, TikTok, Shorts — gotowe w 48h. Przyjeżdżamy do Ciebie,
              nagrywamy, montujemy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#kontakt"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#D4A94B] px-7 py-3.5 text-sm font-bold text-[#0E1624] transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Darmowa konsultacja
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/35 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Zobacz realizacje
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-14 flex items-center gap-0 divide-x divide-white/8 border-t border-white/6 pt-10"
            >
              {[
                { value: "30+", label: "realizacji" },
                { value: "15+", label: "klientów" },
                { value: "500K+", label: "wyświetleń" },
              ].map((s) => (
                <div key={s.label} className="pr-8 first:pr-8 last:pr-0 [&:not(:first-child)]:pl-8">
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="mt-0.5 text-xs text-white/35">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-2 border-white/12 bg-[#111d2e] shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Status bar */}
                <div className="absolute inset-x-0 top-0 h-10 bg-[#111d2e] z-10 flex items-center justify-center">
                  <div className="h-4 w-20 rounded-full bg-[#0E1624]" />
                </div>
                {/* Video/image fill */}
                <div className="absolute inset-0 top-10 bottom-4 overflow-hidden">
                  <Image
                    src="/logo-square.jpg"
                    alt="IK Creative Ads — przykład realizacji"
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1624]/80 via-transparent to-transparent" />
                  {/* Play indicator */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full bg-[#D4A94B] px-4 py-2">
                      <Play className="h-3 w-3 fill-[#0E1624] text-[#0E1624]" />
                      <span className="text-[11px] font-bold text-[#0E1624]">IK Creative Ads</span>
                    </div>
                  </div>
                </div>
                {/* Home bar */}
                <div className="absolute inset-x-0 bottom-0 h-4 flex items-center justify-center">
                  <div className="h-1 w-24 rounded-full bg-white/20" />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-16 rounded-xl border border-white/10 bg-[#0E1624] px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-white/40">Realizacja do</p>
                <p className="text-lg font-black text-white">48h</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-10 bottom-20 rounded-xl border border-white/10 bg-[#0E1624] px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-white/40">Zasięg</p>
                <p className="text-lg font-black text-[#D4A94B]">500K+</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
