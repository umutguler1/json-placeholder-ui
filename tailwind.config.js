/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#f6c624",
        "custom-blue": "#3785d7",
        "custom-sky": "#cae4f6",
        "custom-orange": "#f06112",
        "custom-white": "#ffffff",
      },
    },
  },
};
