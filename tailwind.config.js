/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      }
    },
  },
  plugins: ['./tailwindcss.config.js'],
};