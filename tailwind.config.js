/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      web: {
        100: "#fafafa",
      },
    },
    extend: {
      keyframes: {
        changeDir: {
          "0%": { transform: "translateX(0vw)" },
          "100%": { transform: "translateX(-1200px)" },
        },
      },
      animation: {
        changeDir: "changeDir 5s ease-in-out infinite",
      },
    },
    // screens: {
    //   mobile: "450px",
    // },
  },
  plugins: [],
};
