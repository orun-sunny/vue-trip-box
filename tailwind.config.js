/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '13rem',
      },
    },

    fontFamily: {
      'body': ['Be Vietnam Pro', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary': colors.blue[600],
      },
    },
  },

  plugins: [
    // require('@frostui/tailwindcss/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('preline/plugin'),
    require('tailwindcss-animate'),
  ],
};
