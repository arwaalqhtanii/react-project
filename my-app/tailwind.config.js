// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        brown: {
          500: '#A52A2A',  // يمكنك اختيار أي قيمة للون البني هنا
          600: '#8B4513',
          lightBrown: 'rgb(226, 163, 128)'
          
        },
      },
    },
    
  },
  plugins: [],
};