/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        even: '0px 0px 6px 2px rgba(0, 0, 0, 0.1)',
        episode: '0px 0px 15px 2px rgba(0, 0, 0, 0.1)',
      },
      aspectRatio: {
        poster: '1 / 1.4',
      },
    },
  },
  plugins: [],
};
