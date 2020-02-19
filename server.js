var ip   = "127.0.0.1";
var port = 5000;
var http = require('http');



const server_port = process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || port;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || ip;

// Package
const express = require('express');
const app = express();
var fs = require("fs");// require nodeJS 內建 File System 模組.
// const requestLib = require('request');// requre nodeJS 內建request模組

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

// const server = app.listen(server_port, () => {
//   console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
// });
app.listen(server_port, server_ip_address, () => {
  console.log(`Listening on port ${server_port}`);
});


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(server_port, server_ip_address);

console.log("Server running at http://" + server_ip_address + ":" + server_port);

