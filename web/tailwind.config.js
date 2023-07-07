const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark',
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
  },
};
