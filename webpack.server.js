var server = require('webpack-dev-server')
var config = require('./webpack.config.js')
var webpack = require('webpack');

var devConfig = Object.create(config)
devConfig.watch = true
devConfig.port = 8080;
devConfig.devtool= 'source-map';

var compiler = webpack(devConfig);

webserver = new server(compiler, {

  historyApiFallback: true

});

webserver.listen(devConfig.port, '0.0.0.0', function() {});

console.log('Running on port ' + devConfig.port);