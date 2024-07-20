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
        "bp-300px": "300px",
        "bp-330px": "330px",
        "bp-400px": "330px",

        'xs': '500px',
        'tablet': '640px',
      },
      boxShadow: {
        "green-shadow": "0px 0px 64px 0px rgba(34, 197, 94, 0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
