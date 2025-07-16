/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#666973', //Gris foncé
        lightGray: '#CCD0D9', //Gris clair
        black: '#090B0D', //Noir
        green: '#51736F', //Vert
        white: '#F2F2F2', //Blanc
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '100': '25rem', 
        'margin-top': '100px',
      },
    },
  },
  plugins: [],
}
