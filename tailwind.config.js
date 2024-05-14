


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'dm': ['DM Sans'],
      },
      colors: {
        'primary': '#666666',
        'secondary': '#111111',
      },
 
    },
  },
  plugins: [],
}

