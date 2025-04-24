
import { useEffect, useRef } from "react";
import WebSocketSimulator from "../services/webSocketSimulator";

export const useWebSocketSimulator = () => {
  const webSocketRef = useRef<WebSocketSimulator | null>(null);

  useEffect(() => {
    // Initialize and connect the WebSocket simulator
    webSocketRef.current = new WebSocketSimulator();
    webSocketRef.current.connect();

    // Clean up on unmount
    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.disconnect();
      }
    };
  }, []);

  return webSocketRef.current;
};
