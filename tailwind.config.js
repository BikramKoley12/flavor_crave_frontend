/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      alegreya: ["Alegreya SC", "serif"],
      nokora: ["Nokora", "sans-serif"],
      noticia: ["Noticia Text", "serif"],
      notomusic: ["Noto Music", "sans-serif"],
      notosans: ["Noto Sans", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
      quando: ["Quando", "serif"],
      sniglet: ["Sniglet", "cursive"],
      sofiasans: ["Sofia Sans", "sans-serif"],
      sora: ["Sora", "sans-serif"],
      sourcecodepro: ["Source Code Pro", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      black2: "#181818",
      black3: "#121212",
      transparent: "#ffffff00",
      richblue: "#161F38",
      yellow: {
        solid: "#F1C40F",
        blob: "#FFEBC394",
      },
      orange: {
        solid: "#FF2D00",
        solid2: "#FF7A00",
        banner: "#FF2D00AB",
        blob: "#FF573324",
      },
      grey: {
        text: "#666",
        text2: "#939191",
        cardbg: "#EFEDED",
        border: "#D9D9D9"
      },
      pink: {
        solid: "#CA1F3E",
      },
      lineargradient: {
        1: "#FFEBC342, #FF573308",
        2: "#FFFAF8",
      },
      pink: "#e91e63",
      "pink-50": "#fce4ec",
      "pink-100": "#f8bbd0",
      "pink-200": "#f48fb1",
      "pink-300": "#f06292",
      "pink-400": "#ec407a",
      "pink-500": "#e91e63",
      "pink-600": "#d81b60",
      "pink-700": "#c2185b",
      "pink-800": "#ad1457",
      "pink-900": "#880e4f",
      "pink-100-accent": "#ff80ab",
      "pink-200-accent": "#ff4081",
      "pink-400-accent": "#f50057",
      "pink-700-accent": "#c51162",
      purple: "#9c27b0",
      "purple-50": "#f3e5f5",
      "purple-100": "#e1bee7",
      "purple-200": "#ce93d8",
      "purple-300": "#ba68c8",
      "purple-400": "#ab47bc",
      "purple-500": "#9c27b0",
      "purple-600": "#8e24aa",
      "purple-700": "#7b1fa2",
      "purple-800": "#6a1b9a",
      "purple-900": "#4a148c",
      "purple-100-accent": "#ea80fc",
      "purple-200-accent": "#e040fb",
      "purple-400-accent": "#d500f9",
      "purple-700-accent": "#aa00ff",
      "deep-purple": "#673ab7",
      "deep-purple-50": "#ede7f6",
      "deep-purple-100": "#d1c4e9",
      "deep-purple-200": "#b39ddb",
      "deep-purple-300": "#9575cd",
      "deep-purple-400": "#7e57c2",
      "deep-purple-500": "#673ab7",
      "deep-purple-600": "#5e35b1",
      "deep-purple-700": "#512da8",
      "deep-purple-800": "#4527a0",
      "deep-purple-900": "#311b92",
      "deep-purple-100-accent": "#b388ff",
      "deep-purple-200-accent": "#7c4dff",
      "deep-purple-400-accent": "#651fff",
      "deep-purple-700-accent": "#6200ea",
      indigo: "#3f51b5",
      "indigo-50": "#e8eaf6",
      "indigo-100": "#c5cae9",
      "indigo-200": "#9fa8da",
      "indigo-300": "#7986cb",
      "indigo-400": "#5c6bc0",
      "indigo-500": "#3f51b5",
      "indigo-600": "#3949ab",
      "indigo-700": "#303f9f",
      "indigo-800": "#283593",
      "indigo-900": "#1a237e",
      "indigo-100-accent": "#8c9eff",
      "indigo-200-accent": "#536dfe",
      "indigo-400-accent": "#3d5afe",
      "indigo-700-accent": "#304ffe",
      "teal-400": "#26a69a",
      "yellow-200": "#fff59d",
      "yellow-400": "#ffee58",
      "amber-500": "#ffc107",
    },
    extend: {
      maxWidth: {
        maxContent: "1440px",
      },
      backgroundImage: {
        chefBg: "url('./assets/Chef bg.png')",
      },
    },
  },
  plugins: [],
};
