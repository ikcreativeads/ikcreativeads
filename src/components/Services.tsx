"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ServiceModal from "./ui/ServiceModal";
import { SERVICES, type ServiceItem } from "@/lib/data";

export default function Services() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="uslugi" className="relative section-padding border-t border-white/6">
        <Container>
          <SectionHeading
            eyebrow="Nasze usługi"
            title={
              <>
                Pełen zakres produkcji{" "}
                <span className="text-[#D4A94B]">video reklamowego</span>
              </>
            }
            description="Od koncepcji, przez nagranie, po montaż i publikację — kompleksowo zajmujemy się Twoim contentem video."
          />

          <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3 border border-white/6 rounded-2xl overflow-hidden">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  onClick={() => setSelected(service)}
                  className="group flex flex-col bg-[#0E1624] hover:bg-[#111d2e] transition-colors duration-300 p-8 text-left cursor-pointer w-full"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4A94B]/20 bg-[#D4A94B]/8">
                      <Icon className="h-5 w-5 text-[#D4A94B]" strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">{service.description}</p>

                  <p className="mt-5 text-xs font-semibold text-[#D4A94B]/50 group-hover:text-[#D4A94B] transition-colors">
                    Dowiedz się więcej →
                  </p>
                </motion.button>
              );
            })}
          </div>
        </Container>
      </section>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
}
