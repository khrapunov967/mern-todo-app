/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "md": {"max": "550px"},
        "sm": {"max": "360px"}
      }
    },
  },
  plugins: [],
}

