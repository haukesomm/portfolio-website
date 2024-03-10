import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'marker-light': "linear-gradient(transparent, transparent 42%, theme('colors.secondary.100') 0, theme('colors.secondary.100') 85%, transparent 0)",
        'marker-dark': "linear-gradient(transparent, transparent 42%, theme('colors.secondary.800') 0, theme('colors.secondary.800') 85%, transparent 0)",
      },
      colors: {
        'primary': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bedaff',
          '300': '#92c4fe',
          '400': '#5ea3fc',
          '500': '#3980f8',
          '600': '#2360ed',
          '700': '#1b4bda',
          '800': '#1d3eb0',
          '900': '#1d388b',
          '950': '#121d44',
        },
        'secondary': colors.emerald,
        'background': 'var(--background)',
        'page': 'var(--page-background)',
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

