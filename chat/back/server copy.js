//back
const express = require("express");
const app = express();
const httpServer = require("http").createServer();
const pool = require('./mysqlcon');
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});//cors 오류로 인한 설정

pool.getConnection((err, connection) =>{
  if(err) throw err;
  io.on("connection", (socket) => {
    console.log("연결 성공");

    socket.on("init", (payload) => {
      console.log(payload);
    });

    socket.on("send message", (msg) => {
      console.log(msg);
      io.emit("receive message", { name : msg.name , message : msg.message, time : msg.time});
      connection.query(`INSERT INTO chat (username, message, timelog) VALUES ("${msg.name}", "${msg.message}", "${msg.time}")`,
      (err, result) => {
          if(err){
              throw err;
          } else {
              console.log("대화기록 저장성공");
          }     
      });
      connection.query(`SELECT * FROM chat  WHERE (username = "${msg.name}")`,
      (err, result) => {
          if(err){
              throw err;
          } else {
              console.log("대화기록 불러오기 성공");
          }     
      });
      
    });
  });
})

httpServer.listen(3001);