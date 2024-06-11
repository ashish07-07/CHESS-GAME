import { ChessBoard } from "../components/ChessBoard";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Game() {
  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg flex">
        <div className="grid grid-cols-6 gap-4 w-full bg-red-400">
          <div className="cols-span-4 bg-red-200 w-full">
            <ChessBoard></ChessBoard>
          </div>
          <div className="cols-span-2 bg-green-200 w-full">
            <Button
              onClick={function () {
                navigate("/game");
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
