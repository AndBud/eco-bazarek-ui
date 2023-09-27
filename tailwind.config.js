/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bazarek-yellow-main": "var(--bazarek-yellow-main)",
        "bazarek-brown-dark": "var(--bazarek-brown-dark)",
        "bazarek-green-main": "var(--bazarek-green-main)",
        "bazarek-grey-main": "var(--bazarek-grey-main)",
        "bazarek-grey-light": "var(--bazarek-grey-light)",
        "bazarek-border-light": "var(--bazarek-border-light)",
        "bazarek-border-base": "var(--bazarek-border-base)",
      },
    },
  },
  plugins: [],
};
