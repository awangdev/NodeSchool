var args = process.argv;

//Challenge 11: HTTP File Server

var port = args[2];
var filePath = args[3];
var fs = require('fs');

var http = require('http');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-type' : 'text/plain'});
	fs.createReadStream(filePath).pipe(res);
});
server.listen(port);
*/



