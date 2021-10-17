const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(js|jsx|tsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, './src/assets'),
          to: 'assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Project Title',
      favicon: path.join(__dirname, './src/assets/icons/favicon.png'),
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
  ],
}
