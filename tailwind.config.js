/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./bio_pages/**/*.html",  // Ensure you include all relevant paths
    "./news_pages/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

