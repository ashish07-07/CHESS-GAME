import { useEffect, useState } from "react";

const WS_url = "ws://localhost:8080";
export function useSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_url);

    ws.onopen = function () {};

    ws.onopen = () => {
      console.log("i am a client and i have connected to the server ");
      setSocket(ws);
    };

    ws.onclose = () => {
      console.log("the client existed and is lost the connection");

      setSocket(null);
    };

    return function () {
      ws.close();
    };
  }, []);

  return socket;
}
