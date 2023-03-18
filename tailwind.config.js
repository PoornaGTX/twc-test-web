/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBackground: "url('/images/mainBackground.png')",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "1.5rem",
          xxl: "7.563rem",
          "2xl": "8rem",
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
    },
  },
  plugins: [],
};
