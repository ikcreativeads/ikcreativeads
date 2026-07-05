"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative section-padding border-t border-white/6">
      <Container>
        <SectionHeading
          eyebrow="Liczby"
          title={
            <>
              Dlaczego{" "}
              <span className="text-[#D4A94B]">IK Creative Ads</span>
            </>
          }
          description="Efekty naszej pracy widać w liczbach — to one najlepiej pokazują, na co możesz liczyć przy współpracy z nami."
        />

        <div className="mt-16 grid grid-cols-2 gap-px lg:grid-cols-4 border border-white/6 rounded-2xl overflow-hidden">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0E1624] flex flex-col items-center px-4 py-10 text-center"
            >
              <p className="font-display text-4xl font-extrabold text-[#D4A94B] sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-white/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
