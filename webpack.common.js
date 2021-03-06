const path = require('path');

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(svg|png|jpg|gif|)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
            publicPath: 'imgs/'
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: [
          /node_modules/,
          /\.test\.js$/,
          /cypress/
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};