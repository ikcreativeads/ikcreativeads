"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dot   = useRef<HTMLDivElement>(null);
  const ring  = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Pokaż tylko na desktopie z myszką
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.style.cursor = "none";

    let raf: number;
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let dx = rx, dy = ry;

    const move = (e: MouseEvent) => { rx = e.clientX; ry = e.clientY; };
    const down = () => setClicking(true);
    const up   = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!(el.closest("a, button, [role=button]")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const loop = () => {
      dx += (rx - dx) * 0.12;
      dy += (ry - dy) * 0.12;
      if (dot.current) {
        dot.current.style.transform = `translate(${rx - 4}px, ${ry - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${dx - 20}px, ${dy - 20}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Złota kropka */}
      <div
        ref={dot}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: "50%",
          background: "#D4A94B",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 8px #D4A94B, 0 0 16px #D4A94B88",
          transition: "transform 0.05s linear, width 0.15s, height 0.15s",
          willChange: "transform",
        }}
      />
      {/* Ring z lag efektem */}
      <div
        ref={ring}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: clicking ? 32 : hovering ? 48 : 40,
          height: clicking ? 32 : hovering ? 48 : 40,
          marginTop: clicking ? 4 : hovering ? 4 : 0,
          marginLeft: clicking ? 4 : hovering ? 4 : 0,
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "#F6D98C" : "rgba(212,169,75,0.6)"}`,
          pointerEvents: "none",
          zIndex: 9998,
          boxShadow: hovering ? "0 0 12px #D4A94B44" : "none",
          transition: "width 0.2s, height 0.2s, margin 0.2s, border-color 0.2s, box-shadow 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
