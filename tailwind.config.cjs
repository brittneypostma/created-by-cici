const config = {
  mode: 'jit',
  darkMode: 'media',
  content: ['./src/**/*.{html,css,js,svelte,ts}'],
  theme: {
    fontFamily: {
      heading: ['lobster two'],
      subHeading: ['crimson text'],
      text: ['overlock']
    },
    colors: {
      basics: {
        DEFAULT: '#797971',
        50: '#f1f2f6',
        100: '#dad9d0',
        200: '#cac9bc',
        300: '#b6b5a9',
        400: '#98978d',
        500: '#797971',
        600: '#7f7f7f',
        700: '#595959',
        800: '#373639',
        900: '#040403'
      },
      primary: {
        DEFAULT: '#FFF057',
        50: '#FFFCE7',
        100: '#FFF9bb',
        200: '#FFEE68',
        300: '#FFF057',
        400: '#FFE835',
        500: '#FFE202',
        600: '#f9c846',
        700: '#F7B915',
        800: '#685C00',
        900: '#352F00'
      },
      error: '#EB3A13',
      success: '#28CC87',
      crimson: '#6F1A07',
      white: "#ffffff",
      black: "#000000",
      transparent: 'transparent'
    },
    extend: {
      boxShadow: {
        card: 'box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);'
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      }
    }
  },
  plugins: []
}

module.exports = config
