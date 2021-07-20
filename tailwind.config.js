const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      white: colors.white,
      black: {
        '900': '#161616',
        '800': '#373737',
        '700': '#4B4B4B',
      },
      blue: {
        ...colors.blue,
        'light': '#2DADFF'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
