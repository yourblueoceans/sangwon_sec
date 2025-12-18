/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: { main: '#F8FAFC', paper: '#FFFFFF' },
        primary: {
          50: '#F0FDFA', 100: '#CCFBF1', 200: '#99F6E4',
          400: '#2DD4BF', 600: '#0D9488', 700: '#0F766E',
          800: '#115E59', 900: '#134E4A',
        },
        slate: { 850: '#1E293B' },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        blob: 'blob 10s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        premium: '0 20px 40px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
      },
    },
  },
  plugins: [],
}
