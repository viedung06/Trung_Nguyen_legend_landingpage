/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FBF9F5',
          100: '#F5EFEB',
          200: '#E6D7CB',
          300: '#D4BBA5',
          400: '#B8977E',
          500: '#9C7A5E',
          600: '#7F5E45',
          700: '#5D4037', // Nâu cà phê đậm
          800: '#42281D', // Nâu espresso
          900: '#2A1810', // Nâu sẫm
          950: '#1A0E0A', // Đen cà phê
        },
        gold: {
          400: '#E5C07B',
          500: '#D4A574', // Vàng đồng phong cách Trung Nguyên
          600: '#B8860B',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF0',
          200: '#FDFBF0',
          300: '#FFF8E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
