import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fading: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        infiniteCarousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-35%)' },
        },
        eventCarousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        reverseCarousel: {
          '0%': { transform: 'translateX(-35%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        'crimson-text': ['"Crimson Text"', 'serif'],
      },

    },
  },
  plugins: [],
}

