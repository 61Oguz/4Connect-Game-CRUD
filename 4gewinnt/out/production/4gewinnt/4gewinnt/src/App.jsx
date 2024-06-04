import React, { useState } from "react";
import "./App.css";
import Board from "./Board.jsx";
import BasicTextFields from "./BasicTextFields.jsx";

function App() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div>
      <div className="footer">
        <p>Oguzhan Aydin</p>
      </div>
      <h1 className="header"> 4Gewinnt </h1>
      <BasicTextFields
        player1Name={player1Name}
        setPlayer1Name={setPlayer1Name}
        player2Name={player2Name}
        setPlayer2Name={setPlayer2Name}
      />
      <Board player1Name={player1Name} player2Name={player2Name} />
    </div>
  );

    async function logMovies() {
        const response = await fetch("http://http://localhost:8080/blablup");
        const movies = await response.json();
        console.log(name);
    }

}

export default App;
