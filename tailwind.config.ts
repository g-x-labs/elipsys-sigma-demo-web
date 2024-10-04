import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const sansFontFamily = "Plus Jakarta Sans, sans-serif";
const monoFontFamily = "Roboto Mono, monospace";

const createTextStyle = (
  fontFamily: string,
  fontSize: string,
  fontWeight: string,
  lineHeight = "1",
) => ({
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStyles: {
        h1: createTextStyle(sansFontFamily, "32px", "700"),
        h2: createTextStyle(sansFontFamily, "24px", "600"),
        h3: createTextStyle(sansFontFamily, "20px", "700"),
        sh1: createTextStyle(sansFontFamily, "24px", "700"),
        sh2: createTextStyle(sansFontFamily, "20px", "600"),
        b1: createTextStyle(sansFontFamily, "20px", "500"),
        b2: createTextStyle(sansFontFamily, "16px", "500"),
        b3: createTextStyle(sansFontFamily, "14px", "500"),
        sb1: createTextStyle(monoFontFamily, "16px", "400"),
        sb2: createTextStyle(monoFontFamily, "14px", "400"),
        sb3: createTextStyle(monoFontFamily, "12px", "400"),
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
  },
  plugins: [
    function ({ addUtilities, theme }: PluginAPI) {
      const textStyles = theme("textStyles") as Record<
        string,
        Record<string, string>
      >;
      const utilities = Object.entries(textStyles).reduce(
        (acc, [key, value]) => {
          acc[`.text-${key}`] = value;
          return acc;
        },
        {} as Record<string, Record<string, string>>,
      );

      addUtilities(utilities, {
        respectPrefix: true,
        respectImportant: true,
      });
    },
  ],
};
export default config;
