"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9997, pointerEvents: "none" }}>
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg, #D4A94B, #F6D98C, #D4A94B)",
          backgroundSize: "200% 100%",
          boxShadow: "0 0 8px #D4A94B99",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
