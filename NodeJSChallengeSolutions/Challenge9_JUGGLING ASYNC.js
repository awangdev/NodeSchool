var args = process.argv;

//Challenge 9: Juggling async

var http = require('http');
var bl = require('bl');
var rst = [];
var count = 0;

function printOut() {
	rst.forEach(function(file) {
		console.log(file);
	});
}

function httpGet(index) {
	http.get(args[2 + index], function(response){
		response.pipe(bl(function (err, data) {
			if (err) {
				return console.error(err);
			}
			var dataStr = data.toString();
			rst[index] = dataStr;
			count++;
			if (count == 3) {
				printOut();
		}
		}));
	});
}


for (var i = 0; i < 3; i++) {
	httpGet(i);
}
*/