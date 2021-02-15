const path = require("path");

// common.js

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

// Ecmascript 6

// export default {}
