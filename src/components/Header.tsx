"use client";

import { useEffect, useState } from "react";
import { Aperture, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── DESKTOP: camera navbar ── */}
      <header className="hidden lg:flex fixed inset-x-0 top-0 z-40 justify-center px-6 pt-5">
        <div
          className="relative flex items-center w-full max-w-5xl"
          style={{
            height: 68,
            background: "linear-gradient(180deg, #1c2b3e 0%, #0e1624 100%)",
            border: "1.5px solid rgba(212,169,75,0.45)",
            borderRadius: 14,
            boxShadow:
              "0 0 0 1px rgba(212,169,75,0.08), 0 12px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
            padding: "0 10px",
          }}
        >
          {/* Red dot — recording indicator */}
          <div
            style={{
              position: "absolute",
              top: 9,
              right: 32,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#ff3b30",
              boxShadow: "0 0 8px #ff3b30aa",
            }}
          />

          {/* Left grip */}
          <div
            style={{
              width: 10,
              height: 50,
              flexShrink: 0,
              background: "linear-gradient(90deg, #243140, #1a2840)",
              borderRadius: "7px 3px 3px 7px",
              border: "1px solid rgba(212,169,75,0.2)",
              marginRight: 10,
            }}
          />

          {/* Left dial */}
          <div
            style={{
              width: 30,
              height: 30,
              flexShrink: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #2e415a, #0e1624)",
              border: "1.5px solid rgba(212,169,75,0.4)",
              marginRight: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#D4A94B",
                boxShadow: "0 0 4px #D4A94B88",
              }}
            />
          </div>

          {/* Logo */}
          <a href="/" aria-label="IK Creative Ads" style={{ flexShrink: 0, marginRight: 16 }}>
            <Image
              src="/logo-square.jpg"
              alt="IK Creative Ads"
              width={44}
              height={44}
              priority
              style={{ borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(212,169,75,0.4)" }}
            />
          </a>

          {/* Separator */}
          <div style={{ width: 1, height: 30, background: "rgba(212,169,75,0.2)", marginRight: 20, flexShrink: 0 }} />

          {/* Nav links */}
          <nav className="flex items-center gap-7 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/65 hover:text-[#D4A94B] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Separator */}
          <div style={{ width: 1, height: 30, background: "rgba(212,169,75,0.2)", marginLeft: 20, flexShrink: 0 }} />

          {/* Right dial */}
          <div
            style={{
              width: 26,
              height: 26,
              flexShrink: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #2e415a, #0e1624)",
              border: "1.5px solid rgba(212,169,75,0.3)",
              margin: "0 14px",
            }}
          />

          {/* CTA */}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-5 py-2.5 text-sm font-bold text-[#0E1624] hover:scale-105 transition-transform whitespace-nowrap"
            style={{ flexShrink: 0 }}
          >
            Darmowa konsultacja
          </a>

          {/* Right grip — thicker, like a camera grip */}
          <div
            style={{
              width: 16,
              height: 56,
              flexShrink: 0,
              background: "linear-gradient(90deg, #1a2840, #2e415a)",
              borderRadius: "3px 10px 10px 3px",
              border: "1px solid rgba(212,169,75,0.2)",
              marginLeft: 10,
            }}
          />
        </div>
      </header>

      {/* ── MOBILE: aperture button ── */}
      <header className="fixed inset-x-0 top-0 z-40 lg:hidden">
        <div className="flex items-center justify-between px-5 pt-4">
          <a href="/" aria-label="IK Creative Ads">
            <Image
              src="/logo-square.jpg"
              alt="IK Creative Ads"
              width={44}
              height={44}
              priority
              style={{ borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(212,169,75,0.4)" }}
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Otwórz menu"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(14,22,36,0.92)",
              border: "1.5px solid rgba(212,169,75,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#D4A94B",
            }}
          >
            <Aperture style={{ width: 22, height: 22 }} />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col"
          style={{ backgroundColor: "#0e1624" }}
        >
          <div className="flex items-center justify-between px-5 pt-4">
            <Image
              src="/logo-square.jpg"
              alt="IK Creative Ads"
              width={44}
              height={44}
              style={{ borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(212,169,75,0.4)" }}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Zamknij menu"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(36,49,64,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <X style={{ width: 20, height: 20 }} />
            </button>
          </div>

          <div className="px-5 mt-10">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/8 py-5 text-2xl font-semibold text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] px-6 py-4 text-base font-bold text-[#0E1624]"
            >
              Darmowa konsultacja
            </a>
          </div>
        </div>
      )}
    </>
  );
}
