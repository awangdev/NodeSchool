var args = process.argv;

//Challenge 7: HTTP CLIENT

var url = args[2];
var http = require('http');
http.get(url, function callback(response) {
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on("error", console.error);
	response.on("end", function(end){
		return;
	});
})
*/