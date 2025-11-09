import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        accent: "#6937FF",
        secondary: "#F9FAFB",
        olive: "#A0A86D",
      },
      fontFamily: {
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
        body: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 24px 48px -32px rgba(15, 23, 42, 0.4)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(105, 55, 255, 0.75))",
      },
    },
  },
  plugins: [],
};

export default config;

