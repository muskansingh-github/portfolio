/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
              'primary': ['Major Mono Display', "Roboto"],
              'bolder': ["Anton","Roboto"],
              'Sacramento': ['Sacramento', "cursive"],
              'Raleway': ['Raleway', 'sans-serif'],
              'Bruno': ['Bruno Ace SC', 'cursive']
            }
          }, 
        }, 
  plugins: [],
}
 