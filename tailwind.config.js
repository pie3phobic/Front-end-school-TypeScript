module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-950": "#0F172A",
        "gray-950": "#414B5C",
        "purple-accent": "#6366F1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
