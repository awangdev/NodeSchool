var args = process.argv;

//Challenge 3: My First I/O

var filePath = args[2];
var fs = require('fs');
var buff = fs.readFileSync(filePath);

lines = buff.toString().split('\n').length - 1;
console.log(lines);
*/