/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crema': '#F5E6D3',
        'marron': '#6B4423',
        'verde-oscuro': '#5C7A3C',
        'amarillo': '#F4C430',
      },
      fontFamily: {
        'handwriting': ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
