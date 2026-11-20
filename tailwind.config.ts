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
          navy: "#101820",
          blue: "#004275",
          bg: "#F5F8FB",
          card: "#ffffff",
          border: "rgba(16, 24, 32, 0.14)",
          borderAccent: "rgba(0, 66, 117, 0.28)",
        },
        bg: {
          surface: "var(--bg-surface)",
          card: "var(--bg-card)",
        },
        surface: {
          DEFAULT: "var(--bg-surface)",
          card: "var(--bg-card)",
          elevated: "#ffffff",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          primary: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          border: "var(--border-accent)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          primary: "var(--text-primary)",
          pure: "var(--text-ink)",
          muted: "#4A5568",
        },
        border: {
          DEFAULT: "var(--border-subtle)",
          subtle: "var(--border-subtle)",
          accent: "var(--border-accent)",
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
