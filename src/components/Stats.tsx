"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import AnimatedCounter from "./ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative border-y border-white/6 bg-[#0a1120]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative py-12 px-8 [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:left-0 [&:not(:first-child)]:before:top-1/4 [&:not(:first-child)]:before:h-1/2 [&:not(:first-child)]:before:w-px [&:not(:first-child)]:before:bg-white/6"
            >
              <p className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-white tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/35 max-w-[12ch]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
