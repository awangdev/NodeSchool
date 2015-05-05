var args = process.argv;

//Challenge 12:HTTP UPPERCASERER

var port = args[2];
var map = require('through2-map');

var http = require('http');
var server = http.createServer(function (req, res) {
	if (req.method != 'POST') {
		return res.end('Send me a POST\n');
	}
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});
server.listen(port);
*/
