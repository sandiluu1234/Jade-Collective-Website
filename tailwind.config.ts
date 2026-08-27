import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Japandi Organic palette — sampled directly from the client's
        // Sherwin-Williams reference swatches, with hover/text shades
        // derived and checked against WCAG AA (4.5:1 minimum).
        cream: {
          50: "#EFEDE9",
          100: "#E7E0D5",
          200: "#E4DECB",
        },
        stone: {
          300: "#C7BCAC",
          400: "#ABA193",
        },
        terracotta: {
          500: "#A96E52",
          600: "#83553F",
          700: "#6C4634",
        },
        sage: {
          300: "#AAAC92",
          400: "#9B9E7F",
        },
        olive: {
          500: "#777963",
          600: "#606248",
          700: "#50523C",
        },
        espresso: {
          700: "#6F6863",
          800: "#5F5852",
          900: "#504841",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
