var args = process.argv;

//Challenge 8: HTTP Collect

var url = args[2];
var http = require('http');
var bl = require('bl');

http.get(url, function callback(response){
	response.pipe(bl(function (err, data) {
		if (err) {
			return console.error(err);
		}
		var dataStr = data.toString();
		console.log(dataStr.length);
		console.log(dataStr);
	}));

});
*/