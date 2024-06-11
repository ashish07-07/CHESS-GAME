import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className=" flex-justify-center">
      <div className="pt-8 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={"/chessboard.jpeg"} className="max-w-96"></img>
          </div>

          <div className="pt-16">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-white text-center">
                Play chess online on the #2 site
              </h1>
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={function () {
                    navigate("/game");
                  }}
                >
                  Play Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
