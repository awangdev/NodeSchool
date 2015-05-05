//Module js for Node.js Challenge 6: make it modular
var fs  = require('fs');
var path = require('path');

module.exports = function(dir, filter, callback) {
	fs.readdir(dir, function (err, data) {
		if (err) {
			return callback(err);
		}
		else {
			_filter = "." + filter;
			data = data.filter(function (file) {
				return path.extname(file) === _filter;
			});
			callback(null, data);
		}
	});
};