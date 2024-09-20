/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "vivid-red": {
          0: "#FFFCFC",
          50: "#FFF7F6",
          100: "#FFEAE8",
          200: "#FFD9D6",
          300: "#FFC9C6",
          400: "#FFB8B4",
          500: "#FFA29F",
          600: "#FA8483",
          700: "#FF1A40",
          800: "#F00032",
          900: "#DF0029",
          950: "#6F0013"
        },
        "charcoal": "#0D0D0D",
        "charcoal-gray": {
          0: "#FCFCFD",
          50: "#F9F9FB",
          100: "#EFF0F3",
          200: "#E7E8EC",
          300: "#E0E1E6",
          400: "#D8D9E0",
          500: "#CDCED7",
          600: "#B9BBC6",
          700: "#8B8D98",
          800: "#80828D",
          900: "#62636C",
          950: "#1E1F24"
        }
      }
    },
  },
  plugins: [],
}

