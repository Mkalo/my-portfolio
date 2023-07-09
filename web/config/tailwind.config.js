const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[800]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.zinc[900]'),
            '--tw-prose-pre-code': theme('colors.zinc[100]'),
            '--tw-prose-pre-bg': theme('colors.zinc[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[100]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[100]'),
            '--tw-prose-invert-hr': theme('colors.zinc[700]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.zinc[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.zinc[600]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[700]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
