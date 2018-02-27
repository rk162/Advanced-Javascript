var express = require('express'),
app = express();
// http = require('http').Server(app),
// WebSocketServer = require('ws').Server,
// wss = new WebSocketServer({
//     port: 8080
// });

app.use(express.static(__dirname));
//app.use('/js',express.static(__dirname+'/js'));

// app.get('/', function(req, res) {
// res.sendFile(__dirname + '/index.html');
// });

// wss.broadcast = function broadcast(data) {
// wss.clients.forEach(function each(client) {
//     client.send(data);
// });
// };

// var messages = [];
// wss.on('connection', function (ws) {
//   messages.forEach(function(message){
//     ws.send(message);
//   });
//   ws.on('message', function (message) {
//     messages.push(message);
//     console.log('Message Received: %s', message);
//     wss.clients.forEach(function (conn) {
//       conn.send(message);
//     });
//   });

 
// ws.on('error', function(msg) {
//     console.log(msg)
// });
// });

app.listen(5000, function() {
console.log('listening on *:5000');
});

// Drag --> source
// DragOver --> Destination
// dragEnd -->source
// dragStart --> source
// dragLeave --> destination
// drop --> destination