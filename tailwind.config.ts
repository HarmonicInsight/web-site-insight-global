import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdfaf2",
          100: "#faf3df",
          200: "#f4e3b1",
          300: "#ecd083",
          400: "#dcb150",
          500: "#c5a55a",
          600: "#b8942f",
          700: "#967622",
          800: "#6f581a",
          900: "#4a3a11",
        },
        ink: {
          50: "#f7f7f9",
          100: "#eeeef2",
          200: "#d6d6df",
          300: "#a8a8b5",
          400: "#75758b",
          500: "#4f4f64",
          600: "#363649",
          700: "#262635",
          800: "#1a1a2e",
          900: "#0f0f1a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Inter", "system-ui", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #fdfaf2 0%, #faf3df 50%, #f4e3b1 100%)",
        "gold-gradient": "linear-gradient(135deg, #c5a55a 0%, #b8942f 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 40px -8px rgba(184, 148, 47, 0.3)",
        "soft": "0 4px 24px -4px rgba(0, 0, 0, 0.06)",
        "card": "0 8px 32px -8px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "subtle-pulse": "subtlePulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        subtlePulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
