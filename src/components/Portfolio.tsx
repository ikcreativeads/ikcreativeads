"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ArrowUpRight, TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { PORTFOLIO_ITEMS } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative section-padding bg-dark-blue/40">
      <Container className="relative">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Realizacje, które{" "}
              <span className="text-gold-gradient">mówią same za siebie</span>
            </>
          }
          description="Zobacz przykładowe projekty zrealizowane dla naszych klientów z różnych branż."
        />

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>div]:mb-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-white/5 bg-charcoal-blue/30"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.thumbnail}
                  alt={`Miniatura realizacji video: ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient shadow-gold-glow">
                    <Play className="h-6 w-6 fill-navy text-navy" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-2 inline-block rounded-full border border-gold/30 bg-navy/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-warm backdrop-blur-sm">
                    {item.industry}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-gold-glow">
                    <TrendingUp className="h-4 w-4" />
                    {item.result}
                  </div>
                  <a
                    href="#kontakt"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-gold-warm"
                  >
                    Zobacz case study
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
