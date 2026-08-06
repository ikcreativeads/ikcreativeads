"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

interface Props {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = service ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg pointer-events-auto rounded-3xl border border-white/10 bg-[#162235] shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top border */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A94B]/80 to-transparent" />

              {/* Gold glow top */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#D4A94B]/8 to-transparent pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Zamknij"
              >
                <X size={16} />
              </button>

              <div className="relative p-8 sm:p-10">
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D4A94B]/25 bg-[#D4A94B]/8">
                    {service.icon && (
                      <service.icon className="h-6 w-6 text-[#D4A94B]" strokeWidth={1.75} />
                    )}
                  </div>
                  <h2 className="text-2xl font-extrabold text-white leading-tight">
                    {service.title}
                  </h2>
                </div>

                {/* Tagline */}
                <p className="mt-4 text-[#D4A94B] font-semibold text-base">
                  {service.details.tagline}
                </p>

                {/* Description */}
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-[#D4A94B]/20 via-white/10 to-transparent" />

                {/* Bullets */}
                <ul className="space-y-3">
                  {service.details.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="text-[#D4A94B] shrink-0 mt-0.5" />
                      <span className="text-white/75 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.details.ctaHref ?? "#kontakt"}
                  onClick={onClose}
                  className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-4 text-base font-bold text-[#0E1624] hover:shadow-[0_0_30px_rgba(212,169,75,0.4)] transition-all hover:scale-[1.02]"
                >
                  {service.details.cta}
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
