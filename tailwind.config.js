/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [

  /* relevant files from the blog + theme */
      "../../content/**/*.{html,md}",
      "../../layouts/**/*.html",

  /* relevant files from the theme */
      "./layouts/**/*.html",

      /* also pick nested css from theme */
      "../../assets/css/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}