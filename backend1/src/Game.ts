// import { Chess } from "chess.js";
// import { GAME_OVER, MOVE } from "./messages";
// export class Game {
//   public player1: WebSocket;
//   public player2: WebSocket;
//   public board: Chess;

//   public starttime: Date;

//   constructor(player1: WebSocket, player2: WebSocket) {
//     this.player1 = player1;
//     this.player2 = player2;
//     this.board = new Chess();

//     this.starttime = new Date();

//     this.player1.send(
//       JSON.stringify({
//         type: "init_game",
//         payload: {
//           color: "white",
//         },
//       })
//     );

//     this.player2.send(
//       JSON.stringify({
//         type: "init_game",
//         payload: {
//           color: "black",
//         },
//       })
//     );
//   }

//   makeMove(socket: WebSocket, move: { from: string; to: string }) {
//     if (this.board.moves.length % 2 === 0 && socket !== this.player1) {
//       return;
//     }
//     if (this.board.moves.length % 2 === 1 && socket !== this.player2) {
//       return;
//     }

//     try {
//       this.board.move(move);
//     } catch (e) {
//       return;
//     }

//     if (this.board.isGameOver()) {
//       this.player1.emit(
//         JSON.stringify({
//           type: GAME_OVER,
//           payload: {
//             winner: this.board.turn === "w" ? "black" : "white",
//           },
//         })
//       );
//       this.player2.emit(
//         JSON.stringify({
//           type: GAME_OVER,
//           payload: {
//             winner: this.board.turn === "w" ? "black" : "white",
//           },
//         })
//       );
//       return;
//     }
//     if (this.board.moves.length % 2 == 0) {
//       this.player2.emit(
//         JSON.stringify({
//           type: MOVE,
//           payload: move,
//         })
//       );
//     } else {
//       this.player1.emit(
//         JSON.stringify({
//           type: MOVE,
//           payload: move,
//         })
//       );
//     }
//   }
// }
import { WebSocket } from "ws";

import { GAME_OVER, MOVE } from "./messages";
import { Chess } from "chess.js";
export class Game {
  public player1: WebSocket;
  public player2: WebSocket;
  public board: Chess;

  public starttime: Date;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();

    this.starttime = new Date();

    this.player1.send(
      JSON.stringify({
        type: "init_game",
        payload: {
          color: "white",
        },
      })
    );

    this.player2.send(
      JSON.stringify({
        type: "init_game",
        payload: {
          color: "black",
        },
      })
    );
  }

  makeMove(socket: WebSocket, move: { from: string; to: string }) {
    if (this.board.history().length % 2 === 0 && socket !== this.player1) {
      return;
    }
    if (this.board.history().length % 2 === 1 && socket !== this.player2) {
      return;
    }

    try {
      this.board.move(move);
    } catch (e) {
      return;
    }

    if (this.board.isGameOver()) {
      this.player1.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner: this.board.turn() === "w" ? "black" : "white",
          },
        })
      );
      this.player2.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner: this.board.turn() === "w" ? "black" : "white",
          },
        })
      );
      return;
    }

    console.log(this.board);
    console.log(this.board.history().length);
    if (this.board.history().length % 2 === 0) {
      this.player1.send(
        JSON.stringify({
          type: MOVE,
          payload: move,
        })
      );
    } else {
      this.player2.send(
        JSON.stringify({
          type: MOVE,
          payload: move,
        })
      );
    }
  }
}
