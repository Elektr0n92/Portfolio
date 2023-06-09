/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
