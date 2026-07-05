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
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left mx-0"
      }`}
    >
      {eyebrow && (
        <span className="reveal mb-4 inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-warm">
          {eyebrow}
        </span>
      )}
      <h2
        className="reveal font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        style={{ transitionDelay: "50ms" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="reveal mt-5 text-base leading-relaxed text-white/60 sm:text-lg"
          style={{ transitionDelay: "100ms" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
