/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'valhalla': {
          DEFAULT: '#242343',
          dark: '#1a1a32',
        },
        'azure': '#F9FFFF',
        'cornflower': '#414277',
        'sky-accent': '#00B8F1',
        'progress': {
          gray: '#ececec',
          cyan: '#daf6ff',
          orange: '#ffecda',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}

