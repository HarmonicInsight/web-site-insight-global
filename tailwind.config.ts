import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand: Ivory & Gold (official palette)
        // Canonical gold = #C9A249, ivory = #FAF8F5
        gold: {
          50: "#fdfaf2",
          100: "#faf3df",
          200: "#f4e3b1",
          300: "#ecd083",
          400: "#dcb150",
          500: "#c9a249", // brand canonical
          600: "#b8942f",
          700: "#967622",
          800: "#6f581a",
          900: "#4a3a11",
        },
        ivory: {
          50: "#faf8f5",  // brand canonical ivory
          100: "#f5f1ea",
          200: "#ebe4d6",
          300: "#dcd1bc",
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
        "hero-gradient": "linear-gradient(135deg, #faf8f5 0%, #faf3df 50%, #f4e3b1 100%)",
        "gold-gradient": "linear-gradient(135deg, #c9a249 0%, #b8942f 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 40px -8px rgba(201, 162, 73, 0.3)",
        "soft": "0 4px 24px -4px rgba(0, 0, 0, 0.06)",
        "card": "0 8px 32px -8px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "subtle-pulse": "subtlePulse 4s ease-in-out infinite",
        "shimmer": "shimmer 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        subtlePulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
