import { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#B8390E",
          DEFAULT: "#DC4731",
          dark: "#3B0918",
        },
        secondary: {
          light: "#F9F9FB",
          DEFAULT: "#FFFFF5",
          dark: "#F1F1F1",
        },
        backgrounds: {
          secondary: "#fff",
          primary: "#fafafa",
        },
        button: {
          primary: "rgb(0, 204, 255)",
          secondary: "rgb(0, 0, 0)",
          warning: "rgb(255, 178, 36)",
          danger: "rgb(218, 47, 53)",
          success: "rgb(57, 142, 74)",
        },
        typography: {
          primary: "rgb(23, 23, 23)",
          secondary: "rgb(102, 102, 102)",
        },
        border: {
          primary: "rgb(235, 235, 235)",
          secondary: "rgb(201, 201, 201)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)", opacity: "1" },
        "100%": { transform: "translateX(-100%)", opacity: "0" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
    animation: {
      slideIn: "slideIn 0.5s ease-out forwards",
      fadeIn: "fadeIn 0.5s ease-out forwards",
      fadeOut: "fadeIn 0.5s ease-out forwards",
      slideOut: "slideOut 0.5s ease-in forwards",
    },

    backgroundImage: {
      "gradient-1": "linear-gradient(to top left, #DC4731, #3B0918)",
      "gradient-2": "linear-gradient(to top left, #1B314D, #2C4669)",
      "gradient-3": "linear-gradient(to top left, #FEFBF5, #edf2fb)",
      "gradient-4": "linear-gradient(to top left, #d7e3fc, #FEFBF5)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
