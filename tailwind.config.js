/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF6B35',
          pink: '#F72585',
          purple: '#7209B7',
          darkpurple: '#3A0CA3',
          cyan: '#4CC9F0',
          green: '#06D6A0',
          amber: '#FFB703',
        },
        dark: {
          DEFAULT: '#05060F',
          100: '#0A0B1A',
          200: '#0F1025',
          300: '#14153A',
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FF6B35, #F72585)',
        'gradient-brand-3': 'linear-gradient(135deg, #FF6B35, #F72585, #7209B7)',
        'gradient-radial-orange': 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
        'gradient-radial-pink': 'radial-gradient(circle, rgba(247,37,133,0.12) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(32px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'brand': '0 12px 40px rgba(255,107,53,0.4)',
        'brand-sm': '0 6px 20px rgba(255,107,53,0.25)',
        'glow-orange': '0 0 0 6px rgba(255,107,53,0.15)',
      },
    },
  },
  plugins: [],
}
