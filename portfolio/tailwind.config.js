/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          300: '#64ffda',
          400: '#14e8c4',
          500: '#06b6d4',
          600: '#0891b2',
        },
        dark: {
          900: '#111827',
          800: '#1f2937',
        },
      },
      animation: {
        gradient: 'gradient-bg 10s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'button-hover': '0 0 20px rgba(6, 182, 212, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
    },
  },
  plugins: [
    // Safely require the plugin with fallback
    (function() {
      try {
        return require('tailwindcss-animate');
      } catch (e) {
        return function() {}; // Return empty plugin if not installed
      }
    })(),
  ],
};