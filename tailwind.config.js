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
        beige: '#F2C091', //Beige
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        heading: ['2.25rem', { lineHeight: '2.75rem' }],
        'heading-md': ['2.75rem', { lineHeight: '3.25rem' }],
        'heading-lg': ['3rem', { lineHeight: '3.5rem' }],
        subheading: ['1.5rem', { lineHeight: '2rem' }],
        paragraph: ['1.125rem', { lineHeight: '1.75rem' }],
        small: ['0.875rem', { lineHeight: '1.25rem' }],
      },
      spacing: {
        section: '4rem', // 64px
        gapDefault: '2.5rem', // 40px
        sectionSm: '2rem',  // 32px
        sectionMd: '3rem',  // 48px
        sectionLg: '4rem',  // 64px
        sectionXl: '6rem',  // 96px
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'slide-up-delayed': 'slide-up 0.8s ease-out forwards 0.4s',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'zoom-in': 'zoom-in 0.8s ease-out forwards',

      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
        '0%': { opacity: '0', transform: 'translateY(40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
