var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var Express = require('express')
var path = require('path')

var app = new Express()
var port = process.env.PORT || 3000;

console.log(`> process.env.NODE_ENV=${process.env.NODE_ENV}`);

if (process.env.NODE_ENV == 'development') {
  var config = require('./webpack.config')
  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

app.use('/static', Express.static(path.resolve(__dirname, 'dist'), {
  maxAge: 365 * 24 * 60 * 60
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
