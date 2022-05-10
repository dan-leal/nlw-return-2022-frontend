module.exports = {
  content: ["./src/**/*.tsx"],// trocar para .tsx
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E6',
          300: '#996DFF'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
