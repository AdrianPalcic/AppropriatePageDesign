/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
      },

      colors: {
        dark: "#0A0E17",
        primary: "#2A9DF4",
        grayCustom: "#676767",
        darkSecondary: "#0E1420",
        tagColor: "#192135",
      },
    },
  },
  plugins: [],
};
