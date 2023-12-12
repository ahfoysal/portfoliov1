/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#64ffda",
        "green-tint": "rgba(100, 255, 218, 0.1)",
      },
    },
  },
  plugins: [],
};
