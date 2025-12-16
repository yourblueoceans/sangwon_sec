/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        card: '#112240',
        accent: '#64ffda',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        title: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(100,255,218,0.25)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slow-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(100,255,218,0.25)' },
          '50%': { boxShadow: '0 0 0 12px rgba(100,255,218,0)' },
        },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'slow-spin': 'slow-spin 18s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};



