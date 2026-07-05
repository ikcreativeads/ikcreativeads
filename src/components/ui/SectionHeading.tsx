"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left mx-0"}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]/60">
          {eyebrow}
        </p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-base leading-relaxed text-white/45 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
