import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6847E8",
          deep: "#5234CC",
          lavender: "#F1EDFF",
          bg: "#FAFAFF",
          navy: "#11152F",
          secondary: "#626780",
          border: "#E9E7F5",
          green: "#28B77A",
        },
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          surface: "var(--bg-surface)",
        },
        surface: {
          DEFAULT: "var(--surface-default)",
          elevated: "var(--surface-elevated)",
          lavender: "var(--surface-lavender)",
        },
        accent: {
          purple: "var(--accent-purple)",
          deep: "var(--accent-deep)",
          green: "var(--accent-green)",
          lavender: "var(--accent-lavender)",
        },
        palette: {
          navy: "var(--text-navy)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          subtle: "var(--border-color)",
          hover: "var(--border-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
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
        subtle: "0 2px 8px -2px rgba(17, 21, 47, 0.04)",
        card: "0 8px 30px -4px rgba(104, 71, 232, 0.06), 0 2px 8px -2px rgba(17, 21, 47, 0.04)",
        "card-hover": "0 16px 40px -8px rgba(104, 71, 232, 0.12), 0 4px 12px -2px rgba(17, 21, 47, 0.06)",
        elevated: "0 20px 48px -10px rgba(104, 71, 232, 0.16)",
        glow: "0 0 32px -4px rgba(104, 71, 232, 0.25)",
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.025em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
