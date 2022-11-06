/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans-source': ['Source Sans Pro', 'sans-serif', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
