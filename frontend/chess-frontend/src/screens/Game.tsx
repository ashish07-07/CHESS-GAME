import { ChessBoard } from "../components/ChessBoard";
export function Game() {
  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg flex">
        <div className="grid grid-cols-6 gap-4 w-full bg-red-400">
          <div className="cols-span-4 bg-red-200 w-full">
            <ChessBoard></ChessBoard>
          </div>
          <div className="cols-span-2 bg-green-200 w-full">
            <button>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}
