var args = process.argv;

//Challenge 5: Filtered LS

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