const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
