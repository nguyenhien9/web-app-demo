/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0090FF",
      },

      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "launch-page": "url('/src/assets/paris.jpg')",
      },
    },
  },
  plugins: [],
};
