import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FDF8F5',
          100: '#FCEDE8',
          200: '#F5D5C6',
          300: '#EABDA9',
          400: '#DFA58D',
          500: '#C58C78',
          600: '#AE725E',
          700: '#8E5646',
          800: '#754539',
          900: '#3D221C',
        },
        gold: {
          500: '#D4AF37',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

