/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'initial': '0 7px 0 1px #999',
        'clicked': '0 5px 0 1px #666'
      }
    },
  },
  plugins: [],
}
