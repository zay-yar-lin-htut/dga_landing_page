/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-green':       '#00D96F',
        'neo-green-dark':  '#00C853',
        'neo-orange':      '#FF7A1F',
        'neo-orange-dark': '#FF6A00',
        'neo-teal':        '#003D2B',
        'neo-teal-light':  '#0A2F24',
        'neo-blue':        '#00E5FF',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        thai:    ['Kanit', 'sans-serif'],
      },
      boxShadow: {
        'glow-green':  '0 0 20px rgba(0, 217, 111, 0.6)',
        'glow-orange': '0 0 20px rgba(255, 122, 31, 0.6)',
        'glow-blue':   '0 0 20px rgba(0, 229, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
