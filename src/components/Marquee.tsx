"use client";

const ITEMS = [
  "INSTAGRAM REELS",
  "TIKTOK ADS",
  "YOUTUBE SHORTS",
  "NAGRANIA Z DRONA",
  "FOTOGRAFIA FIRMOWA",
  "VIDEO MARKETING",
  "CONTENT PREMIUM",
  "DĘBICA & POLSKA",
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        overflow: "hidden",
        background: "linear-gradient(90deg, #0E1624 0%, #162235 50%, #0E1624 100%)",
        borderTop: "1px solid rgba(212,169,75,0.2)",
        borderBottom: "1px solid rgba(212,169,75,0.2)",
        padding: "14px 0",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 30s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              padding: "0 32px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: i % 3 === 0 ? "#D4A94B" : "rgba(255,255,255,0.35)",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {item}
            <span style={{ marginLeft: 32, color: "rgba(212,169,75,0.4)", fontSize: 10 }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (max-width: 768px) {
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        }
      `}</style>
    </div>
  );
}
