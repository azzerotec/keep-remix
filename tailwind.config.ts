import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        bg: "#1A1F79",
        fundo: "#F5F9F9",
        textdemo: "#99F0AC",
        loginbutton: "#595CFF",
        cinzaclaro: "#B3B3B3",
        azulClaro: "#595CFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
