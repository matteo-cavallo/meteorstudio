module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkPurple: "#26193b",
        lightPurple: "#bf00b2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
