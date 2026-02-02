/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cage-dark": "#0a0a0f",
        "cage-darker": "#050508",
        "cage-purple": "#8b5cf6",
        "cage-blue": "#3b82f6",
        "cage-accent": "#a78bfa",
      },
    },
  },
  plugins: [],
};
