/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/common/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      vazir: ["Vazirmatn FD", "sans-serif"],
    },
    backgroundColor: {
      transparent: "rgba(0,0,0,0)",
      "half-transparent": "rgba(255,255,255,0.3)",
      "dark-half-transparent": "rgba(0,0,0,0.3)",
      "firefox-bg":"rgba(20,20,20,0.7)",
      'firefox-modal-bg': 'rgb(20,20,20)',
      "white": "#fff",
      "black": "#000",
      "green": "#95DF5A",
      'tab': 'rgba(181,181,181,0.3)',
    },
    textColor: { 
      white:"#fff", 
      black:"#000",
      gray:"#cecece",
      star:"#feff91",
    },
    borderColor: { 
      'tab-divider': 'rgba(230,230,230,0.7)'
    }
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
            addVariant('firefox', ({ container, separator }) => {
                const isFirefoxRule = postcss.atRule({
                    name: '-moz-document',
                    params: 'url-prefix()'
                })
                isFirefoxRule.append(container.nodes)
                container.append(isFirefoxRule)
                isFirefoxRule.walkRules(rule => {
                    rule.selector = `.${e(
                        `firefox${separator}${rule.selector.slice(1)}`
                    )}`
                })
            })
        })
  ],
};
