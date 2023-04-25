/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily
fontFamily['sans'] = ['Roboto']

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: fontFamily,
    colors: {
      blackBg: '#202024',
      blackCard: '#323238',
      blackTable: '#29292E',
      blackInput: '#121214',
      white: '#E1E1E6',
      greenPrimary: '#00875F',
      greenDark: '#015F43',
      redPrimary: '#F75A68',
      outline: '#7C7C8A',
      outlineLight: '#C4C4CC',
    },
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: {
            opacity: 0,
            bottom: '-100%',
            left: '50%',
            transform: 'translateX(-50%)',
          },
          to: { opacity: 1, bottom: 0 },
        },
        contentShowMd: {
          from: {
            opacity: 0,
            bottom: '-100%',
            left: '50%',
            transform: 'translateX(-50%)',
            height: 'fit-content',
          },
          to: {
            opacity: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 'fit-content',
          },
        },
      },
      animation: {
        overlayShow: 'overlayShow 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShowMD: 'contentShowMd 350ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
