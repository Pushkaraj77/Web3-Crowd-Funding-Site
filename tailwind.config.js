/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      colors: {
        'light-bg-col': '#eaeaff',
        'title-text': '#3d3d40',
        'light-bg-shade1': '#dfdfff',
        'dark-bg-shade1' : '#1c1c24',
      },
    },
    
  },
  plugins: [],
  darkMode: 'class',
}
