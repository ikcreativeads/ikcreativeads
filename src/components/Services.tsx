"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ServiceModal from "./ui/ServiceModal";
import { SERVICES, type ServiceItem } from "@/lib/data";

export default function Services() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="uslugi" className="relative section-padding">
        <Container className="relative">
          <SectionHeading
            eyebrow="Nasze usługi"
            title={
              <>
                Pełen zakres produkcji{" "}
                <span className="text-gold-gradient">video reklamowego</span>
              </>
            }
            description="Od koncepcji, przez nagranie, po montaż i publikację — kompleksowo zajmujemy się Twoim contentem video."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="reveal"
                  style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                >
                  <button
                    onClick={() => setSelected(service)}
                    className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-charcoal-blue/30 p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 cursor-pointer"
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(400px circle at 50% 0%, rgba(212,169,75,0.12), transparent 70%)",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
                        <Icon className="h-6 w-6 text-gold-warm" strokeWidth={1.75} />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-warm" />
                    </div>

                    <h3 className="relative mt-6 font-display text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>

                    <div
                      className="relative mt-6 h-px w-full bg-gradient-to-r from-gold/0 via-white/10 to-gold/0 transition-all duration-500 group-hover:via-gold/40"
                      aria-hidden="true"
                    />

                    <p className="relative mt-4 text-xs font-semibold text-[#D4A94B]/60 group-hover:text-[#D4A94B] transition-colors">
                      Dowiedz się więcej →
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
}
