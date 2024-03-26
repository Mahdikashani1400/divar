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
        "primary_red": "#A62626",
        "primary-gray": "rgba(0,0,0,.56)"

      },
      spacing: {
        '25': "100px",
        '50': "200px",
      },
      boxShadow: {
        "nav": "0 1px 2px 0 rgba(0,0,0,.12)"
      }
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