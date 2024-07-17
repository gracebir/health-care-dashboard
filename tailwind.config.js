/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
            },
            colors: {
                lightgray: "#F6F7F8",
                "dark-blue": "#072635",
                "active-blue": "#01F0D0",
                "cl-gray": "#707070",
                blood: "#F4F0FE",
                "activate-side": "#D8FCF7",
            },
        },
    },
    plugins: [],
};
