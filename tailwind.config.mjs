/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        violet: '#ae81e9',
        white: '#ffffff',
        black: '#0e0e0e'
      }
    },
    fontFamily: {
      serif: ['Sora', defaultTheme.fontFamily.serif]
    }
  },
  plugins: []
}
