/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      // serif: ["DM Serif", "ui-serif"],
      // mono: ["DM Mono", "ui-monospace"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
