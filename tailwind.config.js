/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43010c",
        secondary: "#f57600",
      },
    },
  },
  plugins: [],
};
