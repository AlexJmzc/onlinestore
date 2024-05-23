const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{ts,tsx}", "./src/components/*.{ts,tsx}", "./src/pages/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primary: "#1B1D24",
          secondary: "#365A08",
          tertiary: "#5D9D0B",
          quaternary: "#72EB3A"
      }
    },
  },
  plugins: [addDynamicIconSelectors()],
}

