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
  return <div className="text-white-200 w-full">Chess Board Bhai genius</div>;
}
