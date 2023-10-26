/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
      default :'1rem',
      sm :'2rem',
      lg :'3rem',
      xl :'4rem',
    },
    extend: {
      backgroundImage: {
        'imageDark': "url('./assets/image/bg-desktop-dark.jpg')",
        'imageLight': "url('./assets/image/bg-desktop-light.jpg')",
      },
      colors:{
        light: {
          VeryLightGray: "hsl(0, 0%, 98%)",
          VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
          LightGrayishBlue: "hsl(233, 11%, 84%)",
          DarkGrayishBlue: "hsl(236, 9%, 61%)",
          VeryDarkGrayishBlue: "hsl(235, 19%, 35%)"
        },
        dark: {
            VeryDarkBlue: "hsl(235, 21%, 11%)",
            VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
            LightGrayishBlue: "hsl(234, 39%, 85%)",
            LightGrayishBlueHover: "hsl(236, 33%, 92%)",
            DarkGrayishBlue: "hsl(234, 11%, 52%)",
            VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
            VeryDarkGrayishBlueHover: "hsl(237, 14%, 26%)"
        },
        primary: {
          BrightBlue: "hsl(220, 98%, 61%)",
          gradientFrom: "hsl(192, 100%, 67%)",
          gradientTo: "hsl(280, 87%, 65%)"
        }
      }
    },
  },
  plugins: [],
}

