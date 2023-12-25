/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
          fontFamily: {
            'crimson': ['Crimson Text', 'serif']
          }
        }
      },
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  plugins: [],
}

