var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  appConfig = require('./app.config.js');

module.exports = {
  entry: {
    index: './src/index',
    styles: './src/main',
    vendor: ['jquery', 'angular', 'angular-ui-router', 'lodash', 'restangular']
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js'
  },

  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'ng-annotate!babel',
        exclude: [/node_modules/]
      }, {
        test: /\.html$/,
        loader: 'html',
        exclude: [/node_modules/]
      },

      {
        test: /main\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded'
      },

      //Bootstrap support
      {
        test: /\.css$/,
        loader: 'css'
      }, {
        test: /\.(woff|woff2)/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.ttf$/,
        loader: 'file-loader'
      }, {
        test: /\.eot$/,
        loader: 'file-loader'
      }, {
        test: /\.svg$/,
        loader: 'file-loader'
      },

      //images
      {
        test: /\.(png)/,
        loader: 'url-loader?limit=10000&minetype=image/png'
      }

    ],

    // Put paths to files in here which are already packaged for production, such as vendor
    // libs that have been minimized already. This is going to bypass any checks on our end
    noParse: []
  },

  resolve: {
    // what kind of files types do we except? this will auto check for only these file types
    // against your path
    extensions: ['', '.js', '.json', '.scss'],
    // The directories to look in
    modulesDirectories: ['node_modules', 'src'],
    // create a shortend name for something used everywhere, like our main module
    alias: {
      module: 'module.js'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: appConfig.name.replace(/\s/g, ''),
      template: 'index.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
    })
  ]
  // create and inject source maps on our build
  // devtool: 'source-map'
};