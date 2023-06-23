import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();

export default {
  devtool: 'inline-sourcemap',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL)
      }
    })
  ],
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       include: [
  //         path.join(__dirname, 'client'),
  //         path.join(__dirname, 'server/shared')
  //       ],
  //       exclude: /(node_modules|bower_components)/,
  //       loaders: [ 'react-hot', 'babel' ]
  //     }
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: [
          /node_modules/,
          path.join(__dirname, 'client')
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'client'),
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        include: [
          path.join(__dirname, 'client')
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.jsx', '.js'],
    modules: [
      'node_modules'
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}