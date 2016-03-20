'use strict';

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    javascript: './index.jsx',
    html: './index.html',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
};
