module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans'],
        'mulish': ['Mulish'],
      }
    },
    colors: {
      yellow: '#FFD873',
      blue: '#152144',
      green: '#10C06D',
      white: "#fff",
      gray: "#E3E6EA",
      'gray-2': "#B3B3B3",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}
