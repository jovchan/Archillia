/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '1.6': '0.325rem',
      },
      margin: {
        '4vw': '2vw',
      }
    },
  },
  plugins: [],
}

