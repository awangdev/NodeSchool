var args = process.argv;
//Challenge 10: TCP Server

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










































