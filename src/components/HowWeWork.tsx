"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import { STEPS } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section id="jak-dzialamy" className="relative section-padding border-t border-white/6 bg-[#0a1120]">
      <Container>
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white">
            Jak <span className="text-[#D4A94B]">działamy</span>
          </h2>
          <p className="text-sm text-white/40 max-w-sm">
            Od pierwszej rozmowy aż po gotowy materiał — prosty, sprawdzony proces.
          </p>
        </div>

        <div className="relative grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-white/6 rounded-2xl overflow-hidden">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#0a1120] p-8 [&:not(:last-child)]:border-b [&:not(:last-child)]:sm:border-b-0 sm:[&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r border-white/6 group"
              >
                {/* Big number behind */}
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-display text-[4.5rem] font-black leading-none text-white/6 tabular-nums select-none group-hover:text-white/10 transition-colors">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4A94B]/15 bg-[#D4A94B]/6">
                    <Icon className="h-5 w-5 text-[#D4A94B]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
