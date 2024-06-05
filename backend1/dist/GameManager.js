"use strict";
// import WebSocket from "ws";
// import { Game } from "./Game";
// import { INIT_GAME, MOVE } from "./messages";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const Game_1 = require("./Game");
const messages_1 = require("./messages");
class GameManager {
    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }
    adduser(socket) {
        this.users.push(socket);
        this.addhandler(socket);
    }
    removeuser(socket) {
        this.users = this.users.filter(function (user) {
            return user !== socket;
        });
    }
    addhandler(socket) {
        socket.on("message", (data) => {
            console.log("reading the message");
            console.log(data);
            const message = JSON.parse(data.toString());
            if (message.type === messages_1.INIT_GAME) {
                if (this.pendingUser) {
                    const game = new Game_1.Game(this.pendingUser, socket); // No need for type assertion here
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else {
                    this.pendingUser = socket;
                }
            }
            if (message.type === messages_1.MOVE) {
                const game = this.games.find((game) => game.player1 === socket || game.player2 === socket);
                if (game) {
                    game.makeMove(socket, message.move);
                }
            }
        });
    }
}
exports.GameManager = GameManager;
