import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grass: "#9bcc50",
        poison: "#b97fc9",
        fire: "#fd7d24",
        flying: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        water: "#4592c4",
        bug: "#729f3f",
        normal: "#a4acaf",
        electric: "#eed535",
        ground: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        fairy: "#fdb9e9",
        fighting: "#d56723",
        psychic: "#f366b9",
        rock: "#a38c21",
        steel: "#9eb7b8",
        ice: "#51c4e7",
        ghost: "#7b62a3",
        dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
        modalBg: "rgba(0,0,0,.5)"
      },
    },
  },
  plugins: [],
};
export default config;
