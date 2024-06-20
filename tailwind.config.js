/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFCE22",
          light: "#FFD84D",
        },
        secondary: {
          DEFAULT: "#2469F6",
          light: "#5087F8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
