import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./ui/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1678",
        secondary: "#8576ff",
        tertiary: "#7bc9ff",
        quaternary: "#a3ffd6",
        text: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;