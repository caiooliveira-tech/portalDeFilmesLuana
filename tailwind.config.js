/** @type {import('tailwindcss').Config} */

const withMt = require("@material-tailwind/react/utils/withMT");
module.exports = withMt({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '64rem',
      },
      colors: {
        "marrom": "#501104",
        "mClaro": "#B0948E"
      }
    },
  },
  plugins: [],
})
