/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*"],
  theme: {
    extend: {
      backgroundImage: {
        "wave-pattern": "url('/src/assets/images/wave.svg')",
        "wave-pattern-two": "url('/src/assets/images/headerbg.svg')",
        "wave-pattern-two-inverted":
          "url('/src/assets/images/headerbginverted.svg')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
