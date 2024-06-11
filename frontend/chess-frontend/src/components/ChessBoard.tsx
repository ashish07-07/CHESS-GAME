import { PieceSymbol } from "chess.js";
import { Square } from "chess.js";
import { Color } from "chess.js";

export function ChessBoard({
  board,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
}) {
  return (
    <div className="text-white-200 w-full">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => (
            <div
              key={j}
              className={`w-14 h-8 ${
                (i + j) % 2 == 0 ? "bg-green-600" : "bg-green-300"
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
