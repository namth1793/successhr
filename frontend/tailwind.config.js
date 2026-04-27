/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf1fb',
          100: '#c5d8f5',
          400: '#4d85c4',
          500: '#1D5298',
          600: '#174585',
          700: '#123870',
          800: '#0e2b58',
          900: '#091e3f',
        },
        navy: {
          700: '#1a3a5c',
          800: '#122844',
          900: '#0c1e33',
        },
        gold: '#f0a500',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
