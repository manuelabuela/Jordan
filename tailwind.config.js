/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'azul': '#F3F7FF'
    },
    fontFamily:{
      'Archivo': ['Archivo', 'sans-serif']
    }
  },
  plugins: [],
}