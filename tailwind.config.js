/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        button: " 0 0 10px rgba(255, 0, 0, 0.5);",
      },
    },
  },
  plugins: [],
};
