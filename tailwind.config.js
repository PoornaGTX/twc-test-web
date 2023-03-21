/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "340px",
      screen600: "600px",
      sm: "640px",
      md: "768px",
      screen960: "960px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      "2xl": "1536px",
      screen1600: "1600px",
      "2xxl": "1680px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      backgroundImage: {
        mainBackground: "url('/images/mainBackground.png')",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "6rem",
          xl: "12rem",
          xxl: "10rem",
          "2xl": "15rem",
          "3xl": "18rem",
        },
        screens: {
          xs: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          xxl: "1440px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
        center: true,
      },
      padding: {
        30.5: "7.625rem", // 122px
      },
      lineHeight: {
        18.25: "4.563rem", //73px
      },
      fontSize: {
        12.5: "3.125rem", //50px
      },
      colors: {
        themeColor: "#083f46",
      },
    },
  },
  plugins: [],
};
