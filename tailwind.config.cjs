/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgprimary: "#6340fc",
        bgsecondary: "#332de9",
        tperiwinkle: "#c5b4ff",
        cviolet: "#472bd7",
      },
    },
    fontFamily: {
      hankengrotesk: ["Hanken Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
