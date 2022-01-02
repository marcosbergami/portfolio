module.exports = {
  content: ['./index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'body': '#FDFCFC',
        'sky-blue': '#0EC6F7',
        'green-first-gradient-color': '#5AEB9D',
        'green-second-gradient-color': '#BFE13A',
        'salmon-first-gradient-color': '#FBCA8E',
        'salmon-second-gradient-color': '#F08F89'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['hover', 'responsive']
    },
  }
}