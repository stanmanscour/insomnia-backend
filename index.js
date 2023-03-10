const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  socket.on('message', msg => {
    io.emit('message', msg)
    console.log(msg);
  })
});



server.listen(port, () => console.log(`server running on ${port}`));