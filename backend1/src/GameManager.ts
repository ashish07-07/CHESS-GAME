import WebSocket from "ws";
import { Game } from "./Game";
import { INIT_GAME, MOVE } from "./messages";

export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket | null;
  private users: WebSocket[];

  constructor() {
    this.games = [];
    this.pendingUser = null;
    this.users = [];
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

      if (message.type === INIT_GAME) {
        if (this.pendingUser) {
          const game = new Game(this.pendingUser, socket);
          this.games.push(game);
          this.pendingUser = null;
        } else {
          this.pendingUser = socket;
        }
      }

      if (message === MOVE) {
        const game = this.games.find(
          (game) => game.player1 === socket || game.player2 === socket
        );

        if (game) {
          game.makeMove();
        }
      }
    });
  }
}
