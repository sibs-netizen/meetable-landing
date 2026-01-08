import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './index.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        meetable: {
          teal: '#01505c',
          dark: '#0f172a',
          light: '#eefcfd',
          accent: '#f59e0b',
          primary: '#017787',
        },
      },
      boxShadow: {
        'meetable-glow': '0 0 10px rgba(1, 119, 135, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
