import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#f3ffe6",
          100: "#e2ffbf",
          200: "#c8ff85",
          300: "#a8f540", // primary accent — MacBook Air neo green
          400: "#8ee617",
          500: "#6fcb09",
          600: "#55a304",
          700: "#417c08",
          800: "#36610d",
          900: "#2e5210",
          950: "#152e02",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
