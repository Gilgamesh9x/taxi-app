/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollMargin: {
        section: "180px",
      },
      colors: {
        lightBlue: "#F4F6FF", // background, text backgrounds, siction deviders
        brightYellow: "#F3C623", // buttons, icons, hover effect, highlights
        vibrantOrange: "#EB8317", // accents, secondary buttons (learn more), pricing (to stand out)
        deepBlue: "#10375C", // headers, Footer Background, Navigation Bar bg, text for darker sections
        hoverBrightYellow: "#E3B01D",
      },
    },
  },
  plugins: [],
};
