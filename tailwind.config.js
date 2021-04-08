module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/2md': '384px'
      },
      boxShadow: {
        'leftSide': 'inset 35px 0px 30px -30px rgba(0, 0, 0, 0.1)',
        'bottomSide': '0px 3px 4px -2px rgba(0,0,0,0.3)'
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif']
      },
      screens: {
        'lm': '461px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}