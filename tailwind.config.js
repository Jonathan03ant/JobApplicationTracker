/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            spacing: {
                '100': '18rem',  // 400px
                '120': '30rem',  // 480px
                '140': '35rem',  // 560px
                '160': '40rem',  // 640px
              },
          fontFamily: {
            'crimson': ['Crimson Text', 'serif'],
            'work': ['Work Sans', 'sans-serif'],
            'cara': ['Chakra Petch', 'sans-serif'],
          },
          colors: {
            
          }
        }
      },
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  plugins: [],
}

