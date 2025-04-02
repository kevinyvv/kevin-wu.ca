/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'tnr': ['"EB Garamond"', 'serif'],
      'sans': ['Inter', 'sans-serif'], 
      'satoshi': ['Satoshi', 'sans-serif'] 
    },
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      colors: {
        washi: {
          light: '#f8f4e6', // Soft cream color 
          DEFAULT: '#f0ebe1', // Natural off-white
          dark: '#e6e0d4'  // Slightly darker tone
        },
        sumi: {
          light: '#5a5a5a', // Medium gray
          DEFAULT: '#3f3f3f', // Charcoal gray
          dark: '#2a2a2a'  // Almost black
        },
        wood: {
          light: '#d7c4aa', // Light wood tone
          DEFAULT: '#b8a38b', // Medium wood tone
          dark: '#8c7a65'  // Dark wood tone
        }
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  darkMode: 'class',
}