/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["VazirMatn", "sans-serif"],
      },
    },
  },plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    rtl: true, // فعال کردن RTL برای daisyUI
    base: true, // می‌تونیم false کنیم اگر می‌خوایم استایل‌های پایه رو خودمون کنترل کنیم
    styled: true,
    utils: true,
    logs: false,
  },
};