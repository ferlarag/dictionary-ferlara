/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'prim': "#A445ED",
          'error': "#FF5252",
          'dark-black': "#050505",
          'dark-semi-black': "#1F1F1F"
      }
    },
  },
  plugins: [],
}
