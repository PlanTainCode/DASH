/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'm': '10px',
        'l': '30px',
        'xl': '50px',
        '2xl': '100px',
      }
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    colors: {
      'blue': '#33BFFF',
      'dark-blue': '#3361FF',
      'purple': '#8833FF',
      'purple-light': 'rgba(136, 51, 255, 0.1)',
      'orange': '#FF6633',
      'green': '#29CC39',
      'yellow': '#FFCB33',
      'gray-dark': '#4D5E80',
      'gray': '#6B7A99',
      'gray-light': '#C3CAD9',
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}