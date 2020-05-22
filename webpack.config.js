const path = require("path");

module.exports = {
  mode:"development",
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader'
    }]
  }
}
