/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html", "./0*/**/*.html", "./template/**/*.html", "./product/**/*.{html,js}"],
  theme: {
    extend: {
        backgroundImage: theme => ({
            'custom-image': "url('/src/img/bg.webp')",
        }),
        fontFamily: {
            lexend: ["Lexend Deca", "sans-serif"],
            comfortaa: ['comfortaa', 'sans-serif'],
        },

        colors: {
            primary: 'var(--primary-color)',
        },
    },
  },
  plugins: [],
}
