import { PieceSymbol } from "chess.js";
import { Square } from "chess.js";
import { Color } from "chess.js";
import { useState } from "react";
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export function ChessBoard({
  board,
  socket,
}: {
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
          {row.map((square, j) => (
            <div
              onClick={() => {
                if (!from) {
                  setFrom(square?.square ?? null);
                } else {
                  // setTo(square?.square ?? null);
                  socket.send(
                    JSON.stringify({
                      type: MOVE,
                      payload: {
                        from,
                        to: square?.square,
                      },
                    })
                  );
                  setFrom(null);
                  console.log({ from, to });
                }
              }}
              key={j}
              className={`w-14 h-8 ${
                (i + j) % 2 == 0 ? "bg-green-500" : "bg-white"
              }`}
            >
              {square ? square.type : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
