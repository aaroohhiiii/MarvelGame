/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tva-orange': '#F68C1F',
        'tva-teal': '#00FFC8',
        'tva-dark': '#0B0B0B',
        'tva-bg': '#1A1A1A',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'share-tech': ['Share Tech Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
