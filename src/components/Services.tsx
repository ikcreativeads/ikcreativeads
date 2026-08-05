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
            title={
              <>
                Wszystko czego potrzebujesz,{" "}
                <span className="text-[#D4A94B]">w jednym miejscu</span>
              </>
            }
            description="Video reklamowe, strony internetowe, reklamy — kompleksowo zajmujemy się obecnością Twojej firmy w internecie."
          />

          <div className="mt-16 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
            <div className="grid sm:grid-cols-3">
              {SERVICES.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setSelected(service)}
                  className={`reveal group relative flex flex-col gap-6 p-8 text-left transition-all duration-300 hover:bg-white/[0.04] ${
                    index < SERVICES.length - 1
                      ? "border-b border-white/8 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <h3 className="font-display text-2xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4A94B] transition-all duration-300 group-hover:gap-3">
                    Dowiedz się więcej
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
}
