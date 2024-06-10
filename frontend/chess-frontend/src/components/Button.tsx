import { useNavigate } from "react-router-dom";

export function Button({ onClick }:{onClick:()
    
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={function () {
        navigate("/game");
      }}
      className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded"
    >
      Play Online
    </button>
  );
}
