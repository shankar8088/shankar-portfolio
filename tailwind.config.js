// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'color-pulse': 'colorPulse 5s ease-in-out infinite',
      },
      keyframes: {
        colorPulse: {
          '0%': { color: '#3b82f6' },     // blue-500
          '50%': { color: '#60a5fa' },    // light blue (sky-400)
          '100%': { color: '#ffffff' },   // white
        },
      },
    },
  },
  plugins: [],
}
  