import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Japandi Organic palette — client-supplied brand reference
        cream: {
          50: "#FAF8F3",
          100: "#F4EFE4",
          200: "#EAE1CD",
        },
        stone: {
          300: "#CBBFA4",
          400: "#B3A488",
        },
        terracotta: {
          500: "#B25E3D",
          600: "#984E32",
          700: "#7C4128",
        },
        sage: {
          300: "#C2CBA8",
          400: "#A6B489",
        },
        olive: {
          500: "#75834F",
          600: "#5B6740",
          700: "#454E30",
        },
        espresso: {
          700: "#4A4237",
          800: "#3A342B",
          900: "#2B2620",
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
