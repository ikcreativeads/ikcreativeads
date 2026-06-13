"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : ""
        }`}
        style={{ backgroundColor: scrolled ? "#0e1624ee" : "transparent" }}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between" aria-label="Główna nawigacja">
            <a href="#" className="shrink-0" aria-label="IK Creative Ads — strona główna">
              <Logo />
            </a>

            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/75 transition-colors hover:text-gold-warm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-3 text-sm font-bold text-[#0E1624] hover:scale-105 transition-transform"
              >
                Darmowa konsultacja
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              aria-label="Otwórz menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile menu — bez Framer Motion */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col"
          style={{ backgroundColor: "#0e1624" }}
        >
          <Container>
            {/* Top bar */}
            <div className="flex h-20 items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white"
                aria-label="Zamknij menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links */}
            <ul className="mt-8 flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/8 py-5 text-2xl font-semibold text-white active:text-[#D4A94B]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-4 text-base font-bold text-[#0E1624]"
            >
              Darmowa konsultacja
            </a>
          </Container>
        </div>
      )}
    </>
  );
}
