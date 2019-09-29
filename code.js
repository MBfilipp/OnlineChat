let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(request, respons) {
    respons.sendFile(__dirname + "/index.html");
});

users = [];
connections = [];

io.sockets.on('connection', function(socket) {
    console.log("11111");
    connections.push(socket);

    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("ofokfgj");
    });
});

exports.io = io;