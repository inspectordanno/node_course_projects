const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // if run locally, use port 3000; otherwise, use heroku port

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));


io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  //socket.emit() emits to just the connection
  //io.emit() emits to everyone
  //socket.broadcast.emit() emits to everyone except the connection

  socket.emit('message', 'Welcome!');
  socket.broadcast.emit('message', 'A new user has joined!');

  socket.on('sendMessage', (message) => {
    io.emit('message', message);
  })

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left');
  })

});

server.listen(port, () => {
  console.log('server is up on port ' + port);
});