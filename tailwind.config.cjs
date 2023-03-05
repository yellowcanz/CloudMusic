/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/7': '15.6%',
        '2/7': '30%',
      },
    },
  },
  plugins: [],
}
