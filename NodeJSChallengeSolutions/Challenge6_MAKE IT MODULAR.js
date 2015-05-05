var args = process.argv;

//Challenge 6: Make it Modular

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