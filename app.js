var express  = require('express');
var app      = express();
var fs       = require("fs");
var morgan   = require("morgan");
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer({secure:false});

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
app.use(morgan('combined',{stream: accessLogStream}));

var postingAPI = 'https://localhost:8443/';

app.all("/v2/producto/inventory", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/1", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/2", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/3", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/4", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/5", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/6", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/7", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/8", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/9", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/10", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/11", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/12", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/13", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/14", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/15", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});
app.all("/v2/producto/16", function(req, res) {
    apiProxy.web(req, res, {target: postingAPI});    
});

module.exports = app;
