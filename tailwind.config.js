/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          laxend: ["Laxend", "sans-serif"],
        }
      },
    },
    plugins: [
      require('daisyui'),
    ],
  }