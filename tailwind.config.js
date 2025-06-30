/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensures all your React files are scanned
  ],
  theme: {
    extend: {
      colors:{
'primary':"#5f6FFF"
    }},
  },
  plugins: [],
}
