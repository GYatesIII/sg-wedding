import funBordersPlugin from "./src/tailwind-plugins/fun-borders";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sg-yellow": "#ffdd80",
        "sg-green": "#87af4d",
        "sg-orange": "#fe6d2b",
        "sg-pink": "#e4027b",
        "sg-blue": "#a3a8ff",
      },
      fontFamily: {
        headline: ["Yeseva One", "serif"],
      },
      backgroundImage: {
        "travel-img": "url('/travel-bg.png')",
        "schedule-img": "url('/schedule-bg.png')",
        "faq-img": "url('/faq-bg.png')",
        "yucatan-img": "url('/yucatan-bg.png')",
      },
    },
  },
  plugins: [funBordersPlugin],
};
export default config;
