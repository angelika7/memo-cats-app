const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
      chunkFilename: '[id].js',
      publicPath: ''
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [
                  { loader: 'style-loader' },
                  { 
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1,
                          modules: true,
                          localIdentName: '[name]__[local]__[hash:base64:5]'
                      }
                   },
                   { 
                       loader: 'postcss-loader',
                       options: {
                           ident: 'postcss',
                           plugins: () => [
                               autoprefixer({
                                   browsers: [
                                      "> 1%",
                                      "last 2 versions"
                                   ]
                               })
                           ]
                       }
                    }
              ]
          },
          {
              test: /\.(png|svg|jpg|jpe?g|gif)$/,
              loader: 'url-loader?limit=false&name=/images/[name].[ext]'
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + '/public/index.html',
          filename: 'index.html',
          inject: 'body'
      })
  ]
};

