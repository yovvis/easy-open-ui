/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 0 10px rgba(192,196,204,0.5)"
            }
        }
    },
    plugins: [],
    important: true
}
