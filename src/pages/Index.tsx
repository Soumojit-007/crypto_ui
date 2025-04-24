
import React from "react";
import Header from "../components/Header";
import CryptoTable from "../components/CryptoTable";
import ReduxProvider from "../components/ReduxProvider";
import { useWebSocketSimulator } from "../hooks/useWebSocketSimulator";

const Index: React.FC = () => {
  // This will initialize and clean up the WebSocket simulator
  useWebSocketSimulator();

  return (
    <ReduxProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow p-4">
            <CryptoTable />
          </div>
        </main>
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Crypto Tracker. All rights reserved.</p>
            <p className="mt-1">
              Data updates every 1-2 seconds using simulated WebSocket connection.
            </p>
          </div>
        </footer>
      </div>
    </ReduxProvider>
  );
};

export default Index;
