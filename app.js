var express  = require('express');
var app      = express();
var fs       = require("fs");
var morgan   = require("morgan");
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer({secure:false});

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
app.use(morgan('combined',{stream: accessLogStream}));

var postingAPI = 'https://localhost:8443/';
    
app.all("/v2/producto/3", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});

module.exports = app;
