import { join, resolve } from 'path';

const paths = {
  SRC: resolve(__dirname, 'assets/js'),
  DIST: resolve(__dirname, 'dist/assets'),
};

module.exports = {
  entry: join(paths.SRC, 'main.js'),
  output: {
    path: paths.DIST,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};