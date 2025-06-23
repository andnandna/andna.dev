module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-invert-hr': 'var(--color-teal-500)',
            '--tw-prose-invert-bullets': 'var(--color-white)',
          }
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
