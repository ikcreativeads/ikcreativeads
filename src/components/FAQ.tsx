"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-padding">
      <Container className="relative">
        <SectionHeading
          title={
            <>
              Najczęściej zadawane{" "}
              <span className="text-white">pytania</span>
            </>
          }
          description="Masz inne pytanie? Skontaktuj się z nami — chętnie odpowiemy."
        />

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-white/5 rounded-3xl border border-white/5 bg-charcoal-blue/20">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className="px-6 sm:px-8">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-base font-semibold text-white sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-gold/40 bg-gold-gradient text-navy"
                          : "border-white/10 text-gold-warm"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm leading-relaxed text-white/60 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
