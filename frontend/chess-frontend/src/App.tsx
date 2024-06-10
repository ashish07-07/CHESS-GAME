import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/game" element={<Game></Game>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <button className="bg-red-200"> Join Room</button> */}
    </>
  );
}

export default App;
