/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'Roboto-Mono': ['Roboto Mono', 'monospace']
    },
    extend: {
      
    },
  },
  plugins: [],
}
