// vite.config.ts
import Unocss from 'unocss/vite'
import { 
  presetUno, 
  presetAttributify, 
  presetIcons,
  presetWebFonts} from 'unocss'
import { presetWind } from '@unocss/preset-wind'
import { presetScalpel } from 'unocss-preset-scalpel'

export default {
  plugins: [
    Unocss({
    // -- UnoCSS Config  --//
      presets: [
        presetAttributify({ /* preset options */ }),
        presetUno(),
        presetWind(),
        presetScalpel({
          // config
          /**
   * define color name
   */
          colors: {
            red: '#f00',
            white: '#fff',
            black: '#000',
            blue: '#00f',
            yellow: '#ff0',
            transparent: 'transparent',
            darkGrey:'#1a1c1e'
          },
          /**
           * the default unit you can omitted
           * like width-1 mean this unit ⬇
           */
          unit: 'px',
          /**
           * write you like mediaQuery
           */
          mediaQueries: {
            sm: 'media (min-width: 640px)',
            md: 'media (min-width: 768px)',
            lg: 'media (min-width: 1024px)',
            xl: 'media (min-width: 1280px)',
            // supportGrid: 'supports (display: grid)'
          },
          // set all css has important
          important: false,
          // ignore some rules like ['flexBasis']
          ignoreRules: [],
          // convert unit v
          vToAny: {
            unit: 'rem', // convert v to rem
            rootValue: 16, // value ÷ this
            unitPrecision: 5,
            minPixelValue: 1,
          },
        }),
        presetIcons({ /* options */ }),
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            // custom ones
            lobster: 'Lobster',
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true
              },
              {
                name: 'sans-serif',
                provider: 'none'
              }
            ]
          },
        })
        // ...custom presets
      ],
      rules: [
        ['v', {border: '1px solid red'}]
      ],
      shortcuts: {
        // single utility alias
        'hey': 'text-4xl text-purple-400 font-semibold'
      },
      theme: {
        colors: {
          'very-cool': '#0000ff',
        },
        breakpoints: {
          xs: '320px',
          sm: '640px',
        }
      }
    // -- /UnoCSS Config  --//
    })
  ]
}


