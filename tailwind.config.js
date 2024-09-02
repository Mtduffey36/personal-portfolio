/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#0a3d3a',
        'dark-gray': '@1f1f1f',
        'black': '#000000',
      },
    },
  },
  plugins: [],
};

