/// <reference path = "lib/node.d.ts" />
var http = require('http');
var server = http.createServer(function (req, resp) {
    resp.writeHead(200);
    resp.end('Hello node!');
});
server.listen(1500);
console.log("listening...");