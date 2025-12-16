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
        hand: ['Nanum Pen Script', 'cursive'],
      },
      colors: {
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        slate: {
          850: '#1e293b',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'brush-stroke': "url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=2dd4bf')",
      },
    },
  },
  plugins: [],
};
