var express = require('express');
var app = express();
var Utils = require('./src/utils.js');
var ExpressUtils = require('./src/express-utils.js');

var PORT = 8081;

app.get('/', function(req, res) {
  res.send('<h1>Simple Mock Server</h1></br>\n\
<h3>Suported routes:</h3>\
<ul>\
<li>GET:&nbsp;&nbsp;&nbsp;<a href="/ping">/ping</a></li>\
<li>GET:&nbsp;&nbsp;&nbsp;<a href="/users">/users</a></li>\
</ul>');
})

app.get('/ping', function(req, res) {

  res.statusCode = 201;
  res.contentType = 'application/json';
  res.send("pong " + Date.now());
});

app.get('/users', function(req, res) {
  ExpressUtils.jsonRouteToFile('./mocks/users.json', req, res);
});

var server = app.listen(PORT, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
