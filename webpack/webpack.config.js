const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
const production = mode === 'production';

module.exports = {
  mode: production ? 'production' : 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  devtool: production ? 'source-map' : 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        exclude: /node_modules/,
        type: production ? 'asset' : 'asset/resource',
        generator: {
          filename: `images/${production ? '[name][ext]' : '[hash][ext][query]'}`,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)?$/i,
        exclude: /node_modules/,
        type: production ? 'asset' : 'asset/resource',
        generator: {
          filename: `fonts/${production ? '[name][ext]' : '[hash][ext][query]'}`,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.css'],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
    new webpack.ids.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 8,
    }),
  ],
};
