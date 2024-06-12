// import { ChessBoard } from "../components/ChessBoard";
// import { Button } from "../components/Button";
// import { useNavigate } from "react-router-dom";

// export const INIT_GAME = "init_game";
// export const MOVE = "move";
// export const GAME_OVER = "game_over";

// import { useSocket } from "../hook/useSocket";
// import { useEffect, useState } from "react";
// import { Chess } from "chess.js";

// export function Game() {
//   const socket = useSocket();
//   const [chess, setChess] = useState(new Chess());
//   const [board, setBoard] = useState(chess.board());

//   useEffect(() => {
//     if (!socket) {
//       return;
//     }

//     socket.onmessage = (event) => {
//       // const message = JSON.parse(event.data);
//       const message = JSON.stringify(event.data);
//       console.log(message);

//       switch (message.type) {
//         case INIT_GAME:
//           const newChess = new Chess();
//           setChess(newChess);
//           setBoard(newChess.board());
//           console.log("GAME INITIALIZED");
//           break;
//         case MOVE:
//           const move = message.payload;
//           chess.move(move);
//           setBoard(chess.board());
//           console.log("Move Made");
//           break;
//         case GAME_OVER:
//           console.log("Game Over");
//           break;
//       }
//     };
//   }, [socket]);

//   if (!socket) {
//     return <div>Connection ...</div>;
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="pt-8 max-w-screen-lg w-full">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex items-center justify-center">
//             <ChessBoard
//               chess={chess}
//               setBoard={setBoard}
//               socket={socket}
//               board={board}
//             ></ChessBoard>
//           </div>
//           <div className="bg-slate-900   items-center p-1">
//             <Button
//               onClick={() => {
//                 socket.send(
//                   JSON.stringify({
//                     type: INIT_GAME,
//                   })
//                 );
//               }}
//             >
//               Play
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { ChessBoard } from "../components/ChessBoard";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

import { useSocket } from "../hook/useSocket";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

export function Game() {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      // const message = JSON.parse(event.data);
      const message = JSON.stringify(event.data);

      console.log(message);

      switch (message.type) {
        case INIT_GAME:
          const newChess = new Chess();
          setChess(newChess);
          setBoard(newChess.board());
          console.log("GAME INITIALIZED");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move Made");
          break;
        case GAME_OVER:
          console.log("Game Over");
          break;
        default:
          console.log("Unknown message type");
          break;
      }
    };
  }, [socket]);

  if (!socket) {
    return <div>Connection ...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <ChessBoard
              chess={chess}
              setBoard={setBoard}
              socket={socket}
              board={board}
            />
          </div>
          <div className="bg-slate-900 items-center p-1">
            <Button
              onClick={() => {
                socket.send(
                  JSON.stringify({
                    type: INIT_GAME,
                  })
                );
              }}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
