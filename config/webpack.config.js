const webpack = require('webpack');
const path = require('path');

const DIST_PATH = path.resolve(process.cwd(), 'dist');
const CONFIG_PATH = path.resolve(process.cwd(), 'config');

// console.log(DIST_PATH);

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    vendor: [
      'react', 'redux', 'react-redux',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH,
  },
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],

};
