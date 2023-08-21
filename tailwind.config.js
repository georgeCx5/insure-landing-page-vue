/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        'neo-violet': 'hsl(256, 26%, 20%)',
        'neo-grayish-blue': 'hsl(216, 30%, 68%)',

        // ### Neutral
        'neo-dark-violet': 'hsl(270, 9%, 17%)',
        'neo-grayish-violet': 'hsl(273, 4%, 51%)',
        'neo-light-gray': 'hsl(0, 0%, 98%)',

        // ### Extras
        'extra1': '#C396C6',
      },
      fontFamily: {
        // ### Headings
        'serif-display': 'DM Serif Display',
        // ### Body
        'karla': 'Karla',
      },
      screens: {
        'TB': '768px',
        'DT': '1280px',
        'DTL': '1440px',
        'DTX': '1800px',
      }
    },
  },
  plugins: [],
}