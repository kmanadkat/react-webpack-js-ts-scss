const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
})
