/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(189, 87%, 97%)",
        background: "hsl(0, 0%, 4%)",
        secondary: "hsl(0, 0%, 10%)",
        primary: "hsl(201, 95%, 10%)",
      },
    },
  },
  plugins: [],
};
