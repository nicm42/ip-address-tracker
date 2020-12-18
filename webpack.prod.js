const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js", //[contenthash] makes it cache busting
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new TerserPlugin(), //minifies js 
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html"
      })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader",   //2. turns css into commonjs
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
          "sass-loader"   //1. turns sass into css
        ]
      }
    ]
  }
});