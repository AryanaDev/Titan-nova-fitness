/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-interface)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        nova: "0 0 60px rgba(255, 85, 0, 0.2), 0 28px 90px rgba(2, 8, 23, 0.82)",
        cyan: "0 0 45px rgba(34, 211, 238, 0.2)",
      },
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
};
