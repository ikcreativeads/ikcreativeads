"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Główna nawigacja"
        >
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
              className="btn-shimmer relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-navy shadow-gold-glow-sm transition-transform hover:scale-105"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/98 backdrop-blur-xl lg:hidden"
          >
            <Container>
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
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                }}
                className="mt-10 flex flex-col gap-2"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/5 py-4 text-2xl font-display font-semibold text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold-gradient px-6 py-4 text-base font-bold text-navy shadow-gold-glow-sm"
              >
                Darmowa konsultacja
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
