/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0B0B0B',
          800: '#121212',
          700: '#1C1C1C',
          600: '#2A2A2A',
          500: '#3A3A3A',
          200: '#B5B5B5',
          100: '#E5E5E5'
        },
        accent: {
          500: '#E6FF2A',
          400: '#F0FF6A',
          200: '#FCFFD1'
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(11, 18, 32, 0.35)',
        card: '0 24px 48px -32px rgba(11, 18, 32, 0.4)'
      }
    }
  },
  plugins: []
};
