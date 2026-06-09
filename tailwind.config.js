/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#151c2c',
          950: '#0a0f1c',
        },
        warm: {
          bg: '#F8F7F4',
          surface: '#FFFFFF',
          hover: '#F0EFEA',
          border: '#E5E2DC',
        },
        text: {
          primary: '#2C2A28',
          secondary: '#706C68',
          muted: '#A8A39D',
        },
        accent: {
          primary: 'hsl(var(--primary) / <alpha-value>)',
          success: '#687D58',
          danger: '#C16E60',
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
