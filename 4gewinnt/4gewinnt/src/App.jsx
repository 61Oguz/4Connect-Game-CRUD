// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import GamePage from "./GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
