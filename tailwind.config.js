/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeColor:"#051367",
        bgGradient:"#CBD0FF"
      },
      fontFamily:{
      poppins:["Poppins", "sans-serif"],
      openSans:['Open Sans','sans-serif']
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
   
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}