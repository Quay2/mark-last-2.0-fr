/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Mgreen': '#00FFB2',
      'Mblack': '#1d1d1d',
      'White': '#fff',
      'Black': '#000',

    },
    extend: {},
  },
  plugins: [],
}
