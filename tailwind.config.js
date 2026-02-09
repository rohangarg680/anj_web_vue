/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B1220',
          700: '#273047',
          500: '#46506A',
          100: '#E8EDF6'
        },
        accent: {
          500: '#5F62FF',
          400: '#7A7CFF',
          100: '#EEF0FF'
        },
        mint: {
          500: '#39D6B2',
          100: '#E6FBF5'
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
