const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.html"],
  theme: {
    screens: {
      sm: "641px",
      "sm-down": { max: "640px" },
      md: "769px",
      "md-down": { max: "768px" },
      lg: "1025px",
      "lg-down": { max: "1024px" },
      xl: "1281px",
      "xl-down": { max: "1280px" },
      "2xl": "1921px",
      "2xl-down": { max: "1920px" },
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sora: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        default: "1.875",
      },
      fontSize: {
        h1: [
          "3.875rem",
          {
            letterSpacing: "-1.6px",
            lineHeight: "1.370",
          },
        ],
        h2: [
          "2.875rem",
          {
            letterSpacing: "-0.8px",
            lineHeight: "1.239",
          },
        ],
      },
      colors: {
        brand: "#2bc1c5",
        heading: "#2a343e",
        body: {
          DEFAULT: "#6d6d6d",
          dark: "#000000",
          light: "#bbbbbb",
        },
        dark: {
          DEFAULT: "#1f2123",
          light: "#27292a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
