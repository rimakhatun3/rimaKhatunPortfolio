/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      custom: ['Custom Font', 'sans-serif'],
      // Add more font families as needed
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

