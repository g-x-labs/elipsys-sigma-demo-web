import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"], // Primary font
        mono: ["Roboto Mono", "monospace"], // Secondary font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          900: "#000000",
          800: "#0A0A0A",
          700: "#141414",
        },
        white: "#FFFFFF",
        green: "#C2FB20",
        red: "#FF1744",
        grey: {
          800: "#282828",
          700: "#4A4A4A",
          600: "#646464",
          400: "#A0A0A2",
          200: "#E6E6E6",
          50: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
