const path = require("path");

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
  // Los loader sirven para meter codigo css dentro de un archivo js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
};

// Ecmascript 6

// export default {}
