import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on("connection", function connection(ws) {
  console.log("a client connected me me matlab main server ");
  ws.on("error", console.error);
  console.log(ws);
  gameManager.adduser(ws);

  ws.on("message", function message(data) {
    console.log(`message recieved from client ${data}`);
  });

  ws.on("close", function () {
    gameManager.removeuser(ws);
  });
  // ws.send("hello from server");
  ws.send;
});
