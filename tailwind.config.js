/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            padding: {
                default: "30px",
                lg: "0",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
        extend: {
            colors: {
                primary: "#222222",
                secondary: "#F5E6E0",
            },
            backgroundImage: {
                hero: "url('./src/assets/blue-shopping-bag.jpg')",
            },
        },
    },

    plugins: [],
});
