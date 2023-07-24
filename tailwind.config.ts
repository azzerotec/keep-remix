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
        Cor6F7482: "#6F7482",
        CorA7A7A7: "#A7A7A7",
      },
    },
  },
  plugins: [],
} satisfies Config;
