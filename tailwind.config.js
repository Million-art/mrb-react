/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         
        gray: {
          light: "##9CA3AF",
          deep: "#111827", 
          dark: "#1F2937",  
          medium: "#374151",  
        },
       
        blue: {
          light: "#30c0f9",  
          medium: "#15a2f1",  
          DEFAULT: "#33c3fa",  
        },
         
        red: {
          light: "#D73A49",  
          DEFAULT: "#E93D2A",  
        },
      },
    },
  },
  plugins: [],
}