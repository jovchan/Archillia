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
      },
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        }
      },
      width: {
        '50vw': '50vw',
      }
    },
  },
  plugins: [],
}

