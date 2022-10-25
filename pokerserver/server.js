const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const gameLogic = require('./game-logic')
const app = express()
const port = 8000;
const httpServer = require("http").createServer()



const server = http.createServer(app)
//const io = socketio(server)
const io = require("socket.io")(server, {
    cors: {
      origin: "https://poker-c02be.web.app",
      methods: ["GET", "POST"]
    }
  });
//const io = require("socket.io")(app.listen(port));

// server.listen(process.env.PORT || 8000)
server.listen(process.env.PORT || 8000, () => console.log(`Listening on port ${port}`));
io.on('connection', (client) => {
    gameLogic.initializeGame(io, client)
    //console.log(io.sockets.adapter.rooms)
    console.log("connection!")
})
