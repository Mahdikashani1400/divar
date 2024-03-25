/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px"
    },
    extend: {
      colors: {
        "main_color": "#A62626"
      },
      spacing: {
        '25': "100px",
        '50': "200px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    },
  ],
}