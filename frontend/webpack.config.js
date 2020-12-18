const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new Dotenv(),
  ],
  devtool: "inline-source-map",
  module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }
      ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  resolve: {
      fallback: {
        // util: require.resolve("util/"),
        // buffer: require.resolve("buffer/"),
        // os: require.resolve("os-browserify/browser"),
        // https: require.resolve("https-browserify"),
        // http: require.resolve("stream-http"),
        // zlib: require.resolve("browserify-zlib"),
        // path: require.resolve("path-browserify"),
        // assert: require.resolve("assert/")
      }
  }
};