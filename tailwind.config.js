/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'quattrocento': ['Quattrocento', 'serif'],
        'satisfy': ['Satisfy', 'cursive'],
      },
      colors: {
        'tech-yellow': '#FDC913',
        'light-gray': '#5F5F5F',
        'dark-gray': '#292929',
        'tech-red': '#CE2829',
        'tech-beige': '#FAF7F2',
      },
    },
  },
  plugins: [],
}