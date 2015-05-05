var args = process.argv;

//Challenge 4: My fist ASYNC I/O

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