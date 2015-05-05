var args = process.argv;

//Challenge 13: HTTP JSON API SERVER
var port = args[2];
var url = require('url');
var http = require('http');

//Used to select corresponding function based on key value passed
var routes = {
	"/api/parsetime": function(parsedUrl){
		d = new Date(parsedUrl.query.iso);
		return {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		};
	},
	"/api/unixtime": function(parsedUrl) {
		return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
	}
}
var server = http.createServer(function(req, res) {
	var parsedUrl = url.parse(req.url, true);
	var jsonMsg = routes[parsedUrl.pathname];
	if (jsonMsg) {
		res.writeHead(200, {'Content-Type' : 'application/json'});
		res.end(JSON.stringify(jsonMsg(parsedUrl)));
	}
	else {
		res.writeHead(404);
		res.end();
	}
});
server.listen(port);
*/