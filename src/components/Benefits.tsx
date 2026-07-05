"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { BENEFITS } from "@/lib/data";

export default function Benefits() {
  return (
    <section id="korzysci" className="relative section-padding border-t border-white/6">
      <Container>
        <SectionHeading
          eyebrow="Dlaczego video"
          title={
            <>
              Video, które{" "}
              <span className="text-[#D4A94B]">pracuje na Twój biznes</span>
            </>
          }
          description="Krótkie formy video to dziś najskuteczniejszy sposób na dotarcie do klientów. My zadbamy o to, by Twoja marka wykorzystała ten potencjał w pełni."
        />

        <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3 border border-white/6 rounded-2xl overflow-hidden">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#0E1624] p-8 hover:bg-[#111d2e] transition-colors duration-300"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4A94B]/20 bg-[#D4A94B]/8">
                  <Icon className="h-5 w-5 text-[#D4A94B]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
