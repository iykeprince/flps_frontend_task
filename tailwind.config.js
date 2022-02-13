const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      warning: "#FFF4EA",
      ...colors,
    },
    screens: {
      xs: { max: "639px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
