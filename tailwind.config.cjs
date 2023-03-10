/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headings: ['Merriweather', 'sans'],
        sans: ['Cabin', 'sans'],
      },
      gridTemplateRows: {
        layout: '64px 1fr 64px'
      }
    },
  },
  plugins: [],
}