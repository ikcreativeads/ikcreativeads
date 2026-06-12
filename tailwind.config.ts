import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E1624",
          deep: "#0E1624",
        },
        dark: {
          blue: "#162235",
        },
        charcoal: {
          blue: "#243140",
        },
        gold: {
          DEFAULT: "#D4A94B",
          warm: "#E0B95C",
          glow: "#F6D98C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0E1624 0%, #162235 50%, #243140 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #D4A94B 0%, #E0B95C 50%, #F6D98C 100%)",
        "gold-radial":
          "radial-gradient(circle, rgba(246,217,140,0.25) 0%, rgba(212,169,75,0.05) 60%, transparent 100%)",
        "card-gradient":
          "linear-gradient(160deg, rgba(36,49,64,0.6) 0%, rgba(22,34,53,0.4) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 40px rgba(212, 169, 75, 0.35)",
        "gold-glow-sm": "0 0 20px rgba(212, 169, 75, 0.25)",
        "card-hover": "0 20px 60px -15px rgba(0, 0, 0, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
