/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#5B5CE2",
        secondary:"#212121",
        special:"#F7F7FF",
        success:"#1BC58D"
      },
      container:{
        center:true,
        screens:{
          lg:"1564px"
        }
      }
    },
  },
  plugins: [],
};
