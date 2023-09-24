/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        aha: '4px 4px 20px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  plugins: [],
};
