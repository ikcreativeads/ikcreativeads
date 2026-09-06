"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      if (y < 60) {
        setVisible(true);
      } else if (y > lastY.current + 6) {
        setVisible(false);
      } else if (y < lastY.current - 6) {
        setVisible(true);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "#0e1624ee" : "transparent",
        transition:
          "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s, background-color 0.3s",
        transform: visible ? "translateY(0)" : "translateY(-115%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <Container>
        <nav
          className="flex h-16 lg:h-20 items-center justify-between"
          aria-label="Główna nawigacja"
        >
          <a
            href="/"
            className="shrink-0"
            aria-label="IK Creative Ads — strona główna"
          >
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/75 transition-colors hover:text-[#D4A94B]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-3 text-sm font-bold text-[#0E1624] hover:scale-105 transition-transform"
            >
              Darmowa konsultacja
            </a>
          </div>

          {/* Mobile: minimal "Wycena" pill — no hamburger */}
          <a
            href="#kontakt"
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-[#D4A94B]/35 bg-[#D4A94B]/10 px-4 py-2 text-xs font-bold text-[#D4A94B] transition-colors active:bg-[#D4A94B]/20"
          >
            Wycena
          </a>
        </nav>
      </Container>
    </header>
  );
}
