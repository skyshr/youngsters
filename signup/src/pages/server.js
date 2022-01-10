const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = 5000;
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (soket) => {
  soket.on("onJoin", ({ roomName : room, username : user}) => {
    soket.join(room);
    io.to(room).emit("onConnect", `${user} 님이 입장했습니다.`);
  });

});

server.listen(port, () => console.log(`${port}`));