/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], 
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}', 
    './app/**/*.{js,jsx,ts,tsx}', 
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  prefix: '',
  theme: {
    container: {
      center: true, 
      padding: '2rem', 
      screens: {
        '2xl': '1400px', 
      },
    },
    extend: {
     
    },
  },
  plugins: [
    
  ],
}
