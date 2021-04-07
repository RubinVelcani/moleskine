module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/2md': '384px',
        '44.5': '44.5rem',
        '313': '313px',
        '85': '85%',
        '1/8': '12.5%'
      },
      maxWidth: {
        '16': '16rem',
        '12': '12rem'
      },
      lineHeight: {
        '3': '3rem',
        '4.5': '4.5rem'
      },
      boxShadow: {
        'leftSide': 'inset 35px 0px 30px -30px rgba(0, 0, 0, 0.1)'
      },
      translate: {
        'help': '200%',
        '62': '62px'
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif']
      },
      screens: {
        'lm': '425px'
      },
      fontSize: {
        categoryHeader: ['1.25rem', '5rem']
      },
      borderRadius: {
        'large': '12px'
      },
      transform: ['hover', 'focus'],
      height: {
        '3.5rem': '3.5rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}