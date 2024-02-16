/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'tnr': ['"EB Garamond"', 'serif'] 
    },
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  darkMode: 'class',
}