/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scGreen: {
          DEFAULT: "#28ad63"
        },
        scRice: { DEFAULT: "#f3eee5" }
      }
    },
  },
  plugins: [],
};
