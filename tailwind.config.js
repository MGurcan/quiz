/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white' : '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'green': '#06d6a0',
      'red': '#ef476f',
      'lacivert': '#25316d',
      'turuncu': '#ff0303',
      'eskiMavi': '#4e6e81',
      'gri': '#ececec',
      'LightYesil' : '#E1EEDD',
      'KoyuMavi': '#1c658c',
      'acikMavi' :'#0466c8',
      'mor' : '#3d096c',
      'yesil' : '#3a5a40',
      'siyah' : '#10002b',
      'mavi' : '#003566',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
