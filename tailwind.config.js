/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('img/desktop.jpg')",
        'vector': "url('img/bg2.svg')",
      },
      colors: {
        'myblack': "#14191F",
        'secondary-black': "#22262B",
        'tertiary-green': "#C2EBEF",
        'green-pint': "#C2EBEF",
        'secondary-green': "#09474E",
        'white-secondary': "#F2F7F8",
        'dark-green': "#00535C",
        'light-green': "#E1F6F9",
      }
    },
  },
  plugins: [],
}

