import { CSSRuleObject, PluginCreator } from "tailwindcss/types/config";

const funBordersPlugin: PluginCreator = ({ addUtilities, e, theme }) => {
  const colors = theme("colors") ?? {};
  const newUtilities: CSSRuleObject = {};

  Object.keys(colors).forEach((color) => {
    newUtilities[`.zigzag-lg-${e(color)}`] = {
      "&::after": {
        content: "'\\00a0'",
        display: "block",
        position: "absolute",
        height: "3rem",
        width: "100vw",
        bottom: "-3rem",
        left: "0",
        zIndex: "995",
        "--mask": `conic-gradient(from -40deg at bottom,#0000,#000 1deg 79deg,#0000 80deg) 50%/3.5rem 100%`,
        "-webkit-mask": "var(--mask)",
        mask: "var(--mask)",
        background: colors[color],
      },
    };

    newUtilities[`.zigzag-${e(color)}`] = {
      "&::after": {
        content: "'\\00a0'",
        display: "block",
        position: "absolute",
        height: "1.8rem",
        width: "100vw",
        bottom: "-1.8rem",
        left: "0",
        zIndex: "995",
        "--mask": `conic-gradient(from -40deg at bottom,#0000,#000 1deg 79deg,#0000 80deg) 50%/1.8rem 100%`,
        "-webkit-mask": "var(--mask)",
        mask: "var(--mask)",
        background: colors[color],
      },
    };
  });

  addUtilities(newUtilities);
};

export default funBordersPlugin;
