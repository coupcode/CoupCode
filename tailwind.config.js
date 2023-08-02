/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        brownClr: "rgb(213,145,80)",
        blackClr: "#000",
        whiteClr: "#fff"
      }
    },
  },
  plugins: [],
}