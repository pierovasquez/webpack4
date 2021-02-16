const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require('webpack');
// common.js

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  // Esto hace que se recargue la pagina cada vez que se cambie codigo en los archivos js
  // Ademas configuramos que siempre que se ejecute este webpack.config, abra una pestaña en el navegador con el puerto de la url a 9000
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  // Los loader sirven para meter codigo css dentro de un archivo js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // Hemos quitado el plugin de MiniCssExtract ya que el style-loader es mas rapido en desarrollo.
  // En produccion seria mas conveniente el MiniCssExtract
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server'
    })
  ]
};

// Ecmascript 6

// export default {}
