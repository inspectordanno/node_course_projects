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

let count = 0;

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  socket.emit('countUpdated', count);

  socket.on('increment', () => {
    count++;
    //socket.emit('countUpdated', count);
    //emit to every single connection
    io.emit('countUpdated', count);
  })

});

server.listen(port, () => {
  console.log('server is up on port ' + port);
});