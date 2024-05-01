import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex", defaultTheme.fontFamily.mono],
      },
      colors: {
        "dark-bg": "#080a0e",
        bg: "#10151d",
        "light-bg": "#171f2b",
        text: "#d9dfe7",
        "violet-accent": "#a87ffb",
        "amber-accent": "#ffa23e",
        "grey-accent": "#333e4f",
        "light-grey-accent": "#8b98a9",
      },
    },
  },
  plugins: [],
};
export default config;
