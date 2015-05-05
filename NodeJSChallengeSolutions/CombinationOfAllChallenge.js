/** 
	A combination of all challenges done when learning node.js
	Uncomment each section to get solution
	run: learnyounode verify CombinatoinOfAllChallenge.js
*/
var args = process.argv;

//Challenge 1
/*
console.log('HELLO WORLD');
*/

//Challenge 2
/*
var sum = 0;
for (var i = 2; i < args.length; i++) {
	sum += Number(args[i]);
}
console.log(sum);
*/


//Challenge 3: My First I/O
/*
var filePath = args[2];
var fs = require('fs');
var buff = fs.readFileSync(filePath);

lines = buff.toString().split('\n').length - 1;
console.log(lines);
*/

//Challenge 4: My fist ASYNC I/O
/*
var filePath = args[2];

var lines = 0;
var fs = require('fs');
function readFileTest(callBackFunction) {
	fs.readFile(filePath, function callback(err, fileContents){
		lines = fileContents.toString().split('\n').length - 1;
		callBackFunction();
	})
};

function printLines () {
	console.log(lines);
};
readFileTest(printLines);
*/

//Challenge 5: Filtered LS
/*
var dirPath = args[2];
var filter = "." + args[3];

var fs = require('fs');
var path = require('path');
fs.readdir(dirPath, function callBack(err, list) {
	for (var i in list) {
		if(path.extname(list[i]) == filter) {
			console.log(list[i]);
		}
	}
});
*/

//Challenge 6: Make it Modular
/*
var filterFn = require('./mymodule.js');
var dir = args[2];
var filter = args[3];

filterFn(dir, filter, function(err, data) {
	if (err) {
		return console.log("There was an error:", err);
	} else {
		data.forEach(function (file) {
			console.log(file);
		});
	}
});

*/


//Challenge 7: HTTP CLIENT
/*
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




//Challenge 8: HTTP Collect
/*
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



//Challenge 9: Juggling async
/*
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




//Challenge 10: TCP Server
/*
var port = args[2];
var strftime = require('strftime');
var net = require('net');
var server = net.createServer(function(socket){
	var time = strftime('%F %H:%M', new Date()) + '\n';
	socket.write(time);
	socket.end();
});
server.listen(port);
*/




//Challenge 11: HTTP File Server
/*
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






//Challenge 12:HTTP UPPERCASERER
/*
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





/*
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









































