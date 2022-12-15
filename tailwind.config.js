/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '979px',
        'pc': '1124px',
      },
      colors: {
        lightBackground: "#F6F6F6",
        darkBackground: "#0A0A0A",
        mainColor: "#00D5FA",
        lightColor: "#E6FBFF",
        mainDarkColor: "00D5FA",
        lightGray: "#F0F0F0"
      }
    },
  },
  plugins: [],
}
