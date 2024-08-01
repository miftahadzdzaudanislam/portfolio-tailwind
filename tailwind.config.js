/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

