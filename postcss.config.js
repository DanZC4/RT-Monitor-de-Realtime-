module.exports = {
  plugins: {
    tailwindcss: {
      config: {
        theme: {
          extend: {
            colors: {
              'rosa': '#F26B8F',
              'azul-marino': '#1D3456',
              "azul-marino-100": "#1D2E4A",
              'gris': '#5E728C',
              'azul-50': '#A9D9D9',
              'aqua': '#04D9C4',

            },
            spacing: {
              '100': '30rem',
              '600px': '600px',
              '800px': '800px',
              '616px': '616px',
              '1000px': '1000px',
              '1200px': '1300px'

            },
            maxWidth: {
              '12xl': '100rem',
              '10xl': '86rem',

            }, minWidth: {
              '2xl': '24rem',
            },
            rotate: {
              '2': '2deg',
              '4': '4deg',
              '6': '6deg',
              '8': '8deg',
              '10': '10deg',
              '12': '12deg',
              '14': '14deg',
              '16': '16deg'
            },
            screens: {
              'sm': { 'min': '450px' },
              'md': { 'min': '600px' },
              'lg': { 'min': '700px' },
              'lt': { 'min': '1120px' },
              'xl': { 'min': '1200px' },
              '1.5xl': { 'min': '1550px' },
              '3xl': { 'min': '1780px' },
            },
            zIndex: {
              'men10': '-10',
            }

          }
        }
      }
    },
    autoprefixer: { },
  },
}
