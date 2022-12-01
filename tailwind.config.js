/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#404258',
      'card': '#6B728E',
      'midnight': '#121063',
      'white': 'white',
    },
    fontFamily: {
      'Montserrat': ["Montserrat", "sans-serif"]
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
