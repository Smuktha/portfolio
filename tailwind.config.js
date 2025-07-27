/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If using App Router
  ],
  theme: {
    extend: {
      colors: {
        skynova: "#3DBFF2",
        "skynova-dark": "#1681A9",
        subtleText: "#A6A6A6",
        darkBg: "#0a0a0a",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-fast': 'pulseFast 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseFast: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.7,
            transform: 'scale(1.04)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
