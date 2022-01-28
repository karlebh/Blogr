module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
            fontFamily: {
                barlow: 'Barlow',
                fraunces: 'Fraunces',
                nunito: 'Nunito',
            },
            colors: {
              'red': {
                'light': 'hsl(356, 100%, 66%)',
                'lighter': 'hsl(355, 100%, 74%)',
                'lightest': 'hsl(13, 100%, 72%)',
                'dark': 'hsl(353, 100%, 62%)',
              },
              'blue': {
                'light': 'hsl(240, 2%, 79%)',
                'lighter': 'hsl(237, 17%, 21%)',
                'lightest': 'hsl(237, 23%, 32%)',
                'dark': 'hsl(208, 49%, 24%)',
                'darker': 'hsl(207, 13%, 34%)',
                'darkest': 'hsl(240, 10%, 16%)',
              },
            }
        },
    },

  variants: {
    font: ['responsive', 'hover', 'focus', 'active'],
    color: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontWeight: ['responsive', 'hover', 'focus', 'active']
  },

  plugins: [],
}