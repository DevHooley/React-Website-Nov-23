/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['karla', 'sans-serif'],
      serif: ['karla', 'serif'],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
