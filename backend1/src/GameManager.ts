import WebSocket from "ws";

export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket;
  private users: WebSocket;

  constructor() {
    this.games = [];
  }

  adduser(socket: WebSocket) {
    this.users.push(socket);
    this.addhandler(socket);
  }

  removeuser(socket: WebSocket) {
    this.users = this.users.filter(function (user) {
      return user != socket;
    });
  }

  private addhandler(socket: WebSocket) {
    socket.on("message", function (data) {
      console.log("reading the message");
      console.log(data);
      const message = JSON.stringify(data.toString);

      if (message.type === "init_game") {
        if (this.pendingUser) {
        } else {
          this.pendingUser = socket;
        }
      }
    });
  }
}
