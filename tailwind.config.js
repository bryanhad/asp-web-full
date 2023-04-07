/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#282e3f',
        'secondary': '#333a4d',
        'asp-yellow': '#cf9455',
      },
    },
  },
  plugins: [],
}

