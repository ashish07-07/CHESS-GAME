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
//       const message = JSON.parse(event.data);
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
//       <div className="pt-8 max-w-screen-lg flex">
//         <div className="grid grid-cols-3 gap-4 w-full">
//           <div className="bg-red-200 flex items-center justify-center">
//             <ChessBoard board={board}></ChessBoard>
//           </div>
//           <div className="bg-red-200 flex items-center justify-center">
//             {/* Empty green box */}
//           </div>
//           <div className="bg-green-200 flex items-center justify-center">
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
//       const message = JSON.parse(event.data);
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
//       <div className="pt-8 max-w-screen-lg flex">
//         <div className="grid grid-cols-2 gap-4 w-full">
//           <div className="bg-red-200 flex items-center justify-center">
//             <ChessBoard board={board}></ChessBoard>
//           </div>
//           <div className="bg-green-200 flex items-center justify-center">
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
//       const message = JSON.parse(event.data);
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
//         <div className="grid grid-cols-2 gap-4 ">
//           <div className="bg-red-200 flex items-center justify-center  ">
//             <ChessBoard board={board}></ChessBoard>
//           </div>
//           <div className="bg-green-200 flex items-center justify-center p-4">
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
      const message = JSON.parse(event.data);
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
            <ChessBoard board={board}></ChessBoard>
          </div>
          <div className="bg-green-200 flex items-center justify-center p-4">
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
