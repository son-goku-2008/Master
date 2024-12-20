/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "backcolor": ["#F8F8FF"],
        "bluemain": ["#1e90FF"]
      },
      fontFamily: {
        "chelesa": ["chelesa"],
        "poppins": ["poppins"],
        "rubik": ["rubik"],
        "inter": ["inter"],
        "geologica": ["geologica"],
      },
    },
  },
  plugins: [],
};
