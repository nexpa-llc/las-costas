/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: '#cce0d9',
          200: '#99c1b3',
          300: '#66a18d',
          400: '#338267',
          DEFAULT: '#006341',
          600: '#004f34',
          700: '#003b27',
          800: '#00281a',
          900: '#00140d',
        },
        secondary: {
          100: '#f4cfd5',
          200: '#e99fab',
          300: '#de7082',
          400: '#d34058',
          DEFAULT: '#C8102E',
          600: '#a00d25',
          700: '#780a1c',
          800: '#500612',
          900: '#280309',
        },
        accent: {
          100: '#f7eee1',
          200: '#f0dec3',
          300: '#e8cda6',
          400: '#e1bd88',
          DEFAULT: '#d9ac6a',
          600: '#ae8a55',
          700: '#826740',
          800: '#57452a',
          900: '#2b2215',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    base: false,
    logs: false,
    themes: [
      {
        mytheme: {
          primary: '#006341',
          secondary: '#C8102E',
          accent: '#d9ac6a',
          neutral: '#ffffff',
          'base-100': '#121212',
          info: '#87BFBE',
          success: '#1C7',
          warning: '#f3c23c',
          error: '#922431',
        },
      },
    ],
  },
};
