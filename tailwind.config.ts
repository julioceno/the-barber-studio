import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "almond": "#DEC7A6"
      },
      screens: {
        "bp-330px": "330px",

        'xs': '500px',
        'tablet': '640px',
      }
    },
  },
  plugins: [],
};
export default config;
