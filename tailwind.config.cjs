/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(189, 87%, 97%)",
        background: "hsl(0, 0%, 4%)",
        primary: "hsl(248, 65%, 39%)",
        secondary: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
