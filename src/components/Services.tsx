"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import ServiceModal from "./ui/ServiceModal";
import { SERVICES, type ServiceItem } from "@/lib/data";

export default function Services() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="uslugi" className="relative section-padding border-t border-white/6">
        <Container>
          <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white">
              Pełen zakres{" "}
              <span className="text-[#D4A94B]">produkcji video</span>
            </h2>
            <p className="text-sm text-white/40 max-w-sm">
              Od koncepcji po publikację — kompleksowo zajmujemy się Twoim contentem.
            </p>
          </div>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 border border-white/6 rounded-2xl overflow-hidden">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  onClick={() => setSelected(service)}
                  className="group flex flex-col bg-[#0E1624] hover:bg-[#0f1b2a] transition-colors duration-200 p-8 text-left cursor-pointer w-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="h-6 w-6 text-white/25 group-hover:text-[#D4A94B] transition-colors duration-200" strokeWidth={1.5} />
                    <ArrowUpRight className="h-4 w-4 text-white/15 group-hover:text-white/40 transition-colors duration-200" />
                  </div>
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{service.description}</p>
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
