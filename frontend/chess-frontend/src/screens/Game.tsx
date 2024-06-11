import { ChessBoard } from "../components/ChessBoard";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";
const navigate = useNavigate();
import { useSocket } from "../hook/useSocket";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

export function Game() {
  const socket = useSocket();
  const [chess, setchess] = useState(new Chess());
  console.log(chess);

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
          setchess(new Chess());
          setBoard(chess.board);
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
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg flex">
        <div className="grid grid-cols-6 gap-4 w-full bg-red-400">
          <div className="cols-span-4 bg-red-200 w-full">
            <ChessBoard board={board}></ChessBoard>
          </div>
          <div className="cols-span-2 bg-green-200 w-full">
            <Button
              onClick={function () {
                socket?.send(
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
