// const express = require("express");
// const { Server } = require("socket.io");

// const app = express();

// const io = new Server({});

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html")
// });

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

// io.on("connection", (socket) => {
//   console.log("Socket:", socket);
// });

// io.listen(3001);

const { Server } = require("socket.io");

const io = new Server(3000, { /* options */ });

io.on("connection", (socket) => {
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});

console.log(io);