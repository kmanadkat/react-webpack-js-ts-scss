module.exports = {
  purge: {
    enabled: true,
    content: [
        './src/**/*.js',
        './src/**/*.jsx',
    ]
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
