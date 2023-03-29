/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      secondary: "#D8AB67",
      background: "#151515",
      lighttext: "#D9D9D9",
      texthover: "#A8A8A8",
    },
    extend: {},
  },
  plugins: [],
};
