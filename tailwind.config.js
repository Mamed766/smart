/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-t": "linear-gradient(to top, #000000, rgba(0, 0, 0, 0))",
      },
    },
  },
  plugins: [],
};
