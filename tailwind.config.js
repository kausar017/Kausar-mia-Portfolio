/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "review-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "review-scroll": "review-scroll 75s linear infinite",
      },
    },
  },
  plugins: [require('daisyui'),],
}