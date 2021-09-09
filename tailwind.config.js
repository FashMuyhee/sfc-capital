module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      yellow: '#FFD873',
      blue: '#152144',
      green: '#10C06D',
      white: "#fff",
      gray: "#E3E6EA"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}
