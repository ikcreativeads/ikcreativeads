"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const current = TESTIMONIALS[index];

  return (
    <section id="opinie" className="relative section-padding bg-dark-blue/40">
      <Container className="relative">
        <SectionHeading
          eyebrow="Opinie klientów"
          title={
            <>
              Zaufali nam, a efekty{" "}
              <span className="text-gold-gradient">mówią same za siebie</span>
            </>
          }
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <Quote
            className="absolute -left-2 -top-8 h-16 w-16 text-gold/15 sm:-left-10"
            aria-hidden="true"
          />

          <div className="glass-strong relative min-h-[300px] overflow-hidden rounded-3xl p-8 sm:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex gap-1" aria-label={`Ocena: ${current.rating} na 5`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold-warm text-gold-warm"
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                  &bdquo;{current.content}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-display text-base font-bold text-white">
                    {current.name}
                  </p>
                  <p className="text-sm text-gold-warm">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Poprzednia opinia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-gold/40 hover:text-gold-warm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Wybierz opinię">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Opinia ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-gold-gradient"
                      : "w-2.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Następna opinia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-gold/40 hover:text-gold-warm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
