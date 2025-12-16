/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        navy: {
          900: '#020617', // Very Dark Blue (Background)
          800: '#0F172A', // Slate 900 (Cards)
          700: '#1E293B', // Slate 800 (Borders)
        },
        cyan: {
          400: '#22d3ee', // Primary Accent (Neon)
          500: '#06b6d4', // Secondary Accent
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
