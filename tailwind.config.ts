import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#040508",
          900: "#07090E",
          850: "#0D111A",
          800: "#131826",
          750: "#182030",
          700: "#1F293D",
          600: "#2B3852",
        },
        brand: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          emerald: "#10B981",
          fiverr: "#1DBF73",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.4)",
        card: "0 8px 32px -4px rgba(0, 0, 0, 0.5), 0 2px 8px -2px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 20px 48px -8px rgba(0, 0, 0, 0.7), 0 0 32px -4px rgba(59, 130, 246, 0.15)",
        elevated: "0 24px 60px -12px rgba(0, 0, 0, 0.8)",
        glow: "0 0 32px -4px rgba(59, 130, 246, 0.25)",
        glowCyan: "0 0 32px -4px rgba(6, 182, 212, 0.25)",
        glowEmerald: "0 0 32px -4px rgba(16, 185, 129, 0.25)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.025em",
        widest: "0.2em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
