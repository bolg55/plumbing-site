/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Montserrat var', 'Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
