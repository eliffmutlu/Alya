/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // 128 = 32rem (512px)
        '144': '36rem', // 144 = 36rem (576px)
        '160': '40rem', // 640px
        '192': '48rem', // 768px
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#8ac8ff',
          400: '#54adff',
          500: '#2b91ff',
          600: '#0070ff',
          700: '#0058cc',
          800: '#004299',
          900: '#002b66',
        },
      },
    },
  },
  plugins: [],
};