// import { PieceSymbol } from "chess.js";
// import { Square } from "chess.js";
// import { Color } from "chess.js";
// import { useState } from "react";
// export const INIT_GAME = "init_game";
// export const MOVE = "move";
// export const GAME_OVER = "game_over";

// export function ChessBoard({
//   board,
//   socket,
// }: {
//   board: ({
//     square: Square;
//     type: PieceSymbol;
//     color: Color;
//   } | null)[][];
//   socket: WebSocket;
// }) {
//   const [from, setFrom] = useState<null | Square>(null);
//   const [to, setTo] = useState<null | Square>(null);
//   return (
//     <div className="text-white-200 w-full">
//       {board.map((row, i) => (
//         <div key={i} className="flex">
//           {row.map((square, j) => (

//             const squareRepresentation=String(65+(j%8)) + ""+ (8-Math.floor(j/8)+1);
//             console.log(squareRepresentation)
//             <div
//               onClick={() => {
//                 if (!from) {
//                   setFrom(square?.square ?? null);
//                 } else {
//                   // setTo(square?.square ?? null);
//                   socket.send(
//                     JSON.stringify({
//                       type: MOVE,
//                       payload: {
//                         from,
//                         to: square?.square,
//                       },
//                     })
//                   );
//                   setFrom(null);
//                   console.log({ from, to });
//                 }
//               }}
//               key={j}
//               className={`w-14 h-8 ${
//                 (i + j) % 2 == 0 ? "bg-green-500" : "bg-white"
//               }`}
//             >
//               {square ? square.type : ""}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// import { PieceSymbol } from "chess.js";
// import { Square } from "chess.js";
// import { Color } from "chess.js";
// import { useState } from "react";

// export const INIT_GAME = "init_game";
// export const MOVE = "move";
// export const GAME_OVER = "game_over";

// export function ChessBoard({
//   chess,
//   board,
//   socket,
//   setBoard,
// }: {
//   chess: any;
//   setBoard: any;
//   board: ({
//     square: Square;
//     type: PieceSymbol;
//     color: Color;
//   } | null)[][];
//   socket: WebSocket;
// }) {
//   const [from, setFrom] = useState<null | Square>(null);
//   const [to, setTo] = useState<null | Square>(null);

//   return (
//     <div className="text-white-200 w-full">
//       {board.map((row, i) => (
//         <div key={i} className="flex">
//           {row.map((square, j) => {
//             const squareRepresentation = (String.fromCharCode(97 + (j % 8)) +
//               "" +
//               (8 - i)) as Square;
//             console.log(squareRepresentation);

//             return (
//               <div
//                 onClick={() => {
//                   if (!from) {
//                     // setFrom(square?.square ?? null);
//                     setFrom(squareRepresentation);
//                   } else {
//                     socket.send(
//                       JSON.stringify({
//                         type: MOVE,
//                         payload: {
//                           from,
//                           to: squareRepresentation,
//                         },
//                       })
//                     );
//                     setFrom(null);
//                     chess.move({
//                       from,
//                       to: squareRepresentation,
//                     });
//                     setBoard(chess.board());
//                     console.log({ from, to });
//                   }
//                 }}
//                 key={j}
//                 className={`w-14 h-8 ${
//                   (i + j) % 2 === 0 ? "bg-green-500" : "bg-white"
//                 }`}
//               >
//                 {square ? square.type : ""}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// }

import { PieceSymbol } from "chess.js";
import { Square } from "chess.js";
import { Color } from "chess.js";
import { useState } from "react";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export function ChessBoard({
  chess,
  board,
  socket,
  setBoard,
}: {
  chess: any;
  setBoard: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}) {
  const [from, setFrom] = useState<null | Square>(null);
  const [to, setTo] = useState<null | Square>(null);

  return (
    <div className="text-white-200 w-full">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => {
            const squareRepresentation = (String.fromCharCode(97 + (j % 8)) +
              "" +
              (8 - i)) as Square;

            return (
              <div
                onClick={() => {
                  if (!from) {
                    setFrom(squareRepresentation);
                  } else {
                    const move = {
                      from,
                      to: squareRepresentation,
                    };
                    const moveResult = chess.move(move);
                    if (moveResult) {
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: move,
                        })
                      );
                      setBoard(chess.board());
                      setFrom(null);
                    } else {
                      console.log("Invalid move");
                      setFrom(null); // Reset if move is invalid
                    }
                  }
                }}
                key={j}
                className={`w-14 h-8 ${
                  (i + j) % 2 === 0 ? "bg-green-500" : "bg-white"
                }`}
              >
                {square ? square.type : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
