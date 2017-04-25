const path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry: {
    javascript: './index.js',
    html: './index.html',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    modulesDirectories: [
      path.resolve('node_modules'),
      path.resolve('src'),
      path.resolve('lib'),
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
};
