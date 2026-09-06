"use client";

import { Play, CreditCard, Layers, Phone } from "lucide-react";

const NAV = [
  { label: "Portfolio", href: "#portfolio", icon: Play },
  { label: "Cennik",    href: "#cennik",    icon: CreditCard },
  { label: "Usługi",   href: "#uslugi",    icon: Layers },
  { label: "Kontakt",  href: "#kontakt",   icon: Phone, gold: true },
] as const;

export default function MobileNav() {
  return (
    <nav
      aria-label="Nawigacja mobilna"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden"
      style={{
        background: "rgba(14,22,36,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(212,169,75,0.18)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex h-16 items-stretch">
        {NAV.map(({ label, href, icon: Icon, gold }) => (
          <a
            key={href}
            href={href}
            className="flex flex-1 flex-col items-center justify-center gap-1 transition-colors active:scale-95"
            style={{ color: gold ? "#D4A94B" : "rgba(255,255,255,0.45)" }}
          >
            <Icon
              className="h-5 w-5"
              strokeWidth={gold ? 2 : 1.75}
              style={
                gold
                  ? { filter: "drop-shadow(0 0 8px rgba(212,169,75,0.55))" }
                  : undefined
              }
            />
            <span
              className="text-[10px] font-bold tracking-wide"
              style={{ color: gold ? "#D4A94B" : "rgba(255,255,255,0.45)" }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
