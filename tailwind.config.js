/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#1c1c1c",
        bg2: "#353535",
        text1: "#eeeeee",
        text2: "#e0e0e0",
        accent1: "#10b981",
        accent2: "#58a370"
      }
    },
    transitionDuration: {
      DEFAULT: "300ms"
    }
  },
  plugins: [],
}
