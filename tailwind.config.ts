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
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        surface: {
          DEFAULT: "var(--surface-default)",
          elevated: "var(--surface-elevated)",
          light: "var(--surface-light)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          hover: "var(--accent-hover)",
        },
        palette: {
          "text-primary": "var(--text-primary)",
          "text-muted": "var(--text-muted)",
          "text-subtle": "var(--text-subtle)",
          "text-dark": "var(--text-dark)",
        },
        border: {
          DEFAULT: "var(--border-subtle)",
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
          accent: "var(--border-accent)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(10, 4, 18, 0.4)",
        card: "0 8px 32px -4px rgba(10, 4, 18, 0.5)",
        elevated: "0 16px 48px -8px rgba(10, 4, 18, 0.6)",
        "glow-accent": "0 0 24px -4px rgba(246, 209, 221, 0.35)",
        "inner-highlight": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)",
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
