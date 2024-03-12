/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#FFF0D9',
        'primary-200': '#FEDEAB',
        'primary-300': '#F9C16A',
        'secondary-100': '#65799A',
      },
    },
  },
  plugins: [],
}
