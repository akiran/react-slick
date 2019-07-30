var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    "docs.js": "./docs/index.jsx"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.md$/,
        loader: "html!markdown"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new webpack.IgnorePlugin(/vertx/)],
  devServer: {
    contentBase: path.join(__dirname, "./build"),
    port: 8080,
    hot: true
  }
};
