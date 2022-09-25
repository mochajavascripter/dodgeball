const { io } = require("socket.io-client");

let socket = io();

let playerPanel = document.querySelector("#playerPanel");
let joinPanel = document.querySelector("#joinPanel");

let boyInput = document.querySelector("#boyInput");
let girlInput = document.querySelector("#girlInput");

let joinButton = document.querySelector("#joinButton");

let playingArea = document.querySelector("#playingArea");

socket.on("connect", () => {
  console.log("Hello");
});