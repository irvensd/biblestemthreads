import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#6B7280",
        border: "#E5E7EB",
        surface: "#F9FAFB",
        royal: "#1D4ED8",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
      },
      letterSpacing: {
        label: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
