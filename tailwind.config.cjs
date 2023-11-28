/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl' : '1125px'
      },

      colors: {
        //paleta de colores NexaCode
        'blanco': '#ffffff',
        'negro': '#000000',
        'azul': '#1C3144',
        'amarillo': '#ECB84A',
      },
    },
  },
  plugins: [],
}