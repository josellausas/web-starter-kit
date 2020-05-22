const path = require("path");

module.exports = {
  mode:"development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "src", "client"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
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
