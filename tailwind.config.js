/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',  
        'laptop': '1024px',
        'desktop': '1920px',
      },
      colors: {
        transparent: "transparent",
      },
      backgroundImage: {
        landingBG: "url('/src/assets/bgIMG.jpg')",
      },
    },
  },
  plugins: [],
}