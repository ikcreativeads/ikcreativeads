"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
    <section id="opinie" className="relative section-padding border-t border-white/6">
      <Container>
        <SectionHeading
          eyebrow="Opinie klientów"
          title={
            <>
              Zaufali nam, a efekty{" "}
              <span className="text-[#D4A94B]">mówią same za siebie</span>
            </>
          }
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/8 bg-[#111d2e] p-8 sm:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex gap-1" aria-label={`Ocena: ${current.rating} na 5`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4A94B] text-[#D4A94B]" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                  &bdquo;{current.content}&rdquo;
                </p>
                <div className="mt-8 border-t border-white/6 pt-6 w-full">
                  <p className="text-sm font-bold text-white">{current.name}</p>
                  <p className="text-xs text-[#D4A94B] mt-0.5">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Poprzednia opinia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-[#D4A94B]" : "w-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Następna opinia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
