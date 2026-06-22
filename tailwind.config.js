/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#141414",
        champagne: "#8C8C8C",
        ivory: "#FFFFFF",
        ink: "#141414",
        muted: "#6B6B6B",
        sage: "#ECECEC",
        mist: "#F0F0EF",
        navy: "#141414",
        gold: "#8C8C8C",
        "light-bg": "#F0F0EF",
        "text-primary": "#141414",
        "text-secondary": "#6B6B6B",
        bone: "#FFFFFF",
        clay: "#8C8C8C",
        stone: "#6B6B6B",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        display: ["'Cormorant Garamond'", "serif"],
        playfair: ["'Cormorant Garamond'", "serif"],
        sans: ["Jost", "sans-serif"],
        inter: ["Jost", "sans-serif"],
        mono: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};