/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "welcome-screen": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        layer1: {
          "0%,70%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        layer2: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        textrevel: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        textrevelreverse: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "welcome-screen": "welcome-screen 1s ease-in-out forwards",
        layer1: "layer1 1s ease-in-out forwards",
        layer2: "layer2 1s ease-in-out forwards",
        textrevel: "textrevel 2s ease-in-out forwards",
        textrevelreverse: "textrevelreverse 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

