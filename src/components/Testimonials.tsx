"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "./ui/Container";
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
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const current = TESTIMONIALS[index];

  return (
    <section id="opinie" className="relative section-padding border-t border-white/6">
      <Container>
        <div className="mx-auto max-w-3xl">

          {/* Stars + counter */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#D4A94B] text-[#D4A94B]" />
              ))}
            </div>
            <span className="text-xs text-white/25 tabular-nums">
              {index + 1} / {TESTIMONIALS.length}
            </span>
          </div>

          {/* Quote */}
          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <blockquote className="text-xl leading-relaxed text-white/80 sm:text-2xl font-light tracking-tight">
                  &ldquo;{current.content}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/6" />
                  <div>
                    <p className="text-sm font-bold text-white">{current.name}</p>
                    <p className="text-xs text-[#D4A94B]/70 mt-0.5">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Poprzednia opinia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-1.5" role="tablist">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Opinia ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-[#D4A94B]" : "w-4 bg-white/15 hover:bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Następna opinia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
