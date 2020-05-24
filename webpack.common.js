const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src", "client"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader"
        }
      ]
    },{
      test: /\.jsx?/,
      loader: "babel-loader"
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
