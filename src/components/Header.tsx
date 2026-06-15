"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

// Ikona przysłony (apertura) — dla mobile
function Aperture({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  // Chowaj navbar przy scrollowaniu w dół
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setVisible(true);
      } else if (y > lastY.current + 6) {
        setVisible(false);
      } else if (y < lastY.current - 6) {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const NAV = NAV_LINKS;

  return (
    <>
      {/* ═══════════════════════════════════════════
          DESKTOP — Aparat fotograficzny (top view)
      ═══════════════════════════════════════════ */}
      <div
        className="hidden lg:flex fixed inset-x-0 top-0 z-40 justify-center px-6"
        style={{
          paddingTop: 14,
          paddingBottom: 10,
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s",
          transform: visible ? "translateY(0)" : "translateY(-115%)",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Wrapper — daje przestrzeń na garb aparatu */}
        <div style={{ position: "relative", width: "100%", maxWidth: 1000 }}>

          {/* ── GARB (pentaprism / viewfinder hump) ── */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 56,
            width: 172,
            height: 26,
            zIndex: 2,
            background: "linear-gradient(180deg, #1e3048 0%, #162235 100%)",
            border: "1.5px solid rgba(212,169,75,0.5)",
            borderBottom: "none",
            borderRadius: "8px 8px 0 0",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
          }}>
            {/* Okienko wizjera */}
            <div style={{
              position: "absolute",
              top: 6, left: "50%",
              transform: "translateX(-50%)",
              width: 68, height: 11,
              borderRadius: 3,
              background: "#060e18",
              border: "1px solid rgba(212,169,75,0.35)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
            }} />
          </div>

          {/* ── KORPUS GŁÓWNY ── */}
          <div style={{
            position: "relative",
            zIndex: 1,
            marginTop: 22,        /* garb wchodzi 4px w korpus */
            display: "flex",
            alignItems: "center",
            height: 68,
            background: "linear-gradient(180deg, #1c2d42 0%, #0e1624 100%)",
            border: "1.5px solid rgba(212,169,75,0.48)",
            borderRadius: 14,
            boxShadow: "0 14px 44px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
            padding: "0 6px",
          }}>
            {/* Czerwona kropka nagrywania */}
            <div style={{
              position: "absolute",
              top: 9, right: 34,
              width: 8, height: 8,
              borderRadius: "50%",
              background: "#ff3b30",
              boxShadow: "0 0 8px #ff3b30cc",
            }} />

            {/* Lewy uchwyt (grip) */}
            <div style={{
              width: 11, height: 54, flexShrink: 0,
              background: "linear-gradient(90deg, #243345, #1a2840)",
              borderRadius: "8px 3px 3px 8px",
              border: "1px solid rgba(212,169,75,0.18)",
              marginRight: 10,
              backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)",
            }} />

            {/* Lewe pokrętło (command dial) */}
            <div style={{
              width: 34, height: 34, flexShrink: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle at 38% 35%, #2e4560, #0a1624)",
              border: "1.5px solid rgba(212,169,75,0.45)",
              marginRight: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)",
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "radial-gradient(circle at 40% 40%, #f6d98c, #d4a94b)",
                boxShadow: "0 0 5px #d4a94b88",
              }} />
            </div>

            {/* Logo */}
            <a href="/" aria-label="IK Creative Ads" style={{ flexShrink: 0, marginRight: 14 }}>
              <Image
                src="/logo-square.jpg"
                alt="IK Creative Ads"
                width={44}
                height={44}
                priority
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1.5px solid rgba(212,169,75,0.5)",
                  display: "block",
                }}
              />
            </a>

            {/* Separator */}
            <div style={{ width: 1, height: 32, background: "rgba(212,169,75,0.2)", marginRight: 20, flexShrink: 0 }} />

            {/* Linki nawigacyjne */}
            <nav style={{ flex: 1, display: "flex", alignItems: "center", gap: 28 }}>
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D4A94B")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Separator */}
            <div style={{ width: 1, height: 32, background: "rgba(212,169,75,0.2)", marginLeft: 20, flexShrink: 0 }} />

            {/* Prawe pokrętło (mode dial) */}
            <div style={{
              width: 28, height: 28, flexShrink: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle at 38% 35%, #2e4560, #0a1624)",
              border: "1.5px solid rgba(212,169,75,0.3)",
              margin: "0 12px",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)",
            }} />

            {/* CTA */}
            <a
              href="#kontakt"
              style={{
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "linear-gradient(90deg, #D4A94B, #F6D98C)",
                padding: "0 20px",
                height: 40,
                fontSize: 13,
                fontWeight: 700,
                color: "#0E1624",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              Darmowa konsultacja
            </a>

            {/* Prawy uchwyt — grubszy, jak w prawdziwym aparacie */}
            <div style={{
              width: 18, height: 60, flexShrink: 0,
              background: "linear-gradient(90deg, #182840, #2e4560)",
              borderRadius: "3px 10px 10px 3px",
              border: "1px solid rgba(212,169,75,0.22)",
              marginLeft: 8,
              backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)",
              boxShadow: "2px 0 6px rgba(0,0,0,0.3)",
            }} />
          </div>

          {/* ── DOLNY ŻEBREK (panel sterowania) ── */}
          <div style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 8,
            borderRadius: "0 0 6px 6px",
            background: "linear-gradient(180deg, #162235, #0e1624)",
            border: "1px solid rgba(212,169,75,0.3)",
            borderTop: "none",
            zIndex: 0,
          }} />
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MOBILE — logo + ikona przysłony
      ═══════════════════════════════════════ */}
      <header
        className="fixed inset-x-0 top-0 z-40 lg:hidden"
        style={{
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s",
          transform: visible ? "translateY(0)" : "translateY(-115%)",
          opacity: visible ? 1 : 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px" }}>
          <a href="/" aria-label="IK Creative Ads">
            <Image
              src="/logo-square.jpg"
              alt="IK Creative Ads"
              width={44}
              height={44}
              priority
              style={{ borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(212,169,75,0.5)" }}
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Otwórz menu"
            style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(14,22,36,0.92)",
              border: "1.5px solid rgba(212,169,75,0.45)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#D4A94B", cursor: "pointer",
            }}
          >
            <Aperture size={22} />
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          MOBILE MENU
      ═══════════════════════════════════════ */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col"
          style={{ backgroundColor: "#0e1624" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px" }}>
            <Image
              src="/logo-square.jpg"
              alt="IK Creative Ads"
              width={44}
              height={44}
              style={{ borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(212,169,75,0.5)" }}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Zamknij menu"
              style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "rgba(36,49,64,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>
          </div>

          <div style={{ padding: "0 20px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, marginTop: 32 }}>
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      padding: "20px 0",
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "linear-gradient(90deg, #D4A94B, #F6D98C)",
                padding: "16px 24px",
                fontSize: 16,
                fontWeight: 700,
                color: "#0E1624",
                textDecoration: "none",
              }}
            >
              Darmowa konsultacja
            </a>
          </div>
        </div>
      )}
    </>
  );
}
