"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { STEPS } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section id="jak-dzialamy" className="relative section-padding border-t border-white/6">
      <Container>
        <SectionHeading
          eyebrow="Proces współpracy"
          title={
            <>
              Jak <span className="text-[#D4A94B]">działamy</span>
            </>
          }
          description="Prosty, sprawdzony proces — od pierwszej rozmowy aż po wymierne wyniki w Twoich kanałach social media."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/6 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-white/8 bg-[#0E1624] transition-colors duration-300 group-hover:border-[#D4A94B]/30">
                    <Icon className="h-7 w-7 text-[#D4A94B]" strokeWidth={1.5} />
                    <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#D4A94B] font-display text-[11px] font-extrabold text-[#0E1624]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
