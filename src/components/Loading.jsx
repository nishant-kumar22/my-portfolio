import React from "react";

function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">💻</div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Building Portfolio...
        </h2>
        <div className="font-mono text-green-400 text-sm">
          <div className="animate-pulse">{">"} Loading components...</div>
          <div className="animate-pulse" style={{ animationDelay: "0.5s" }}>
            {">"} Fetching projects...
          </div>
          <div className="animate-pulse" style={{ animationDelay: "1s" }}>
            {">"} Initializing experience...
          </div>
          <div className="animate-pulse" style={{ animationDelay: "1.5s" }}>
            {">"} Ready!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
