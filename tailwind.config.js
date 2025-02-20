/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", 
      "dim",
      "pastel",
      "dark",
      "emerald"
    ]
  },
  darkMode: ['selector', '[data-theme="dim"]']
}