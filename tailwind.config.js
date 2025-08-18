/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F3C13A", // LANDAS yellow
          hover: "#E3B32A",
          light: "#FBEBC1",
        },
        background: {
          cream: "#faf6eb", // Light cream background
        },
        text: {
          primary: "#ffc42c",
          secondary: "#5D5A88",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Arial", "sans-serif"],
      },
      boxShadow: {
        input: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
