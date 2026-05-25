import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        green: {
          DEFAULT: "#64ffda",
          tint: "rgba(100, 255, 218, 0.1)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
