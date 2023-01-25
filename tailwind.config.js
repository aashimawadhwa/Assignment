module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        bluegray_900: "#151d3b",
        orange_A200: "#fa9b42",
        gray_900: "#222223",
        blue_100: "#c1ceff",
        white_A700: "#ffffff",
        orange_100: "#ffd6b1",
      },
      borderRadius: {
        radius8: "8px",
        radius12: "12px",
        radius16: "16px",
        radius22: "22px",
        radius23: "23px",
        radius50: "50%",
      },
      fontFamily: { nunitosans: "Nunito Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
