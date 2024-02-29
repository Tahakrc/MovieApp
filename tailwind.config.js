/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      md: "5rem",
      lg: "7rem",
      sm: "3rem"
    },
    screens: {
      sm: "500px",
      md: "900px",
      lg: "1280px",
    },
    colors: {
      "primary-800": "#12372A",
      "primary-500": "#436850",
      "primary-300": "#ADBC9F",
      "primary-100": "#FBFADA",
      "secondary-500": "#6D2932",
      "secondary-300": "#C7B7A3",
      "white": "#fff",
      "grey-500": "#9E9E9E",
      "grey-300": "#E0E0E0"
    },

  },
  plugins: [],
}