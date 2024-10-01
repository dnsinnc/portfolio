/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     backgroundImage: {
        'main-back': "url('/src/pages/Home/image/back.png')",
        'main-back3': "url('/src/pages/Home/image/back3.png')",
        'main-back4': "url('/src/pages/Home/image/back4.png')",
        'main-back5': "url('/src/pages/Home/image/back5.png')",
        'main-back6': "url('/src/pages/Home/image/back6.png')",
        'main-back-2': "url('/src/pages/Home/image/back2.png')",
        'decor': "url('./src/pages/Home/image/decor.png')"  
     }
  },
  plugins: [],
}

