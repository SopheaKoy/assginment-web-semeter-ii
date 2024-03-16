/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1240px",
      xl: "1440px"
    },
    fontSize: {
      10: ["10px", "15px"],
      12: ["12px", "18px"],
      14: ["14px", "21px"],
      16: ["16px", "24px"],
      18: ["18px", "27px"],
      20: ["20px", "30px"],
      24: ["24px", "36px"],
      32: ["32px", "38px"],
      38: ["38px", "57px"],
      48: ["48px", "72px"],
      50: ["50px", "75px"],
      64: ["68px", "75px"],
      96: ["96px", "100px"]
    }
  },
  plugins: [],
}