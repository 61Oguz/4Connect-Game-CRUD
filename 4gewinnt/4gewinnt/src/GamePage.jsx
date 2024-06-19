import React, { useEffect, useState } from "react";
import "./App1.css";
import Board from "./Board.jsx";
import BasicTextFields from "./BasicTextFields.jsx";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [chat, setChat] = useState([]);
  const [game, setGame] = useState(undefined);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [currentPlayerName, setCurrentPlayerName] = useState(player1Name);
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);

  useEffect(() => {
    fetch(`http://localhost:8080/playernames/${params.gameId}`).then(
      (response) => {
        response.json().then((data) => {
          setPlayer1Name(data.player1Name);
          setPlayer2Name(data.player2Name);
          console.log("response:", data);
        });
      },
    );
    setInterval(() => {
      fetch(`http://localhost:8080/game/${params.gameId}`).then((response) => {
        response.json().then((data) => {
          setBoard(data?.board);
          setGame(data);
        });
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (game?.winner && game.winner !== "") {
      alert(game.winner);
      window.open(
        "https://www.youtube.com/watch?v=0E4haJHYUJw&ab_channel=SlowTVRelax%26Background",
      );
    }
  }, [game?.winner]);

  return (
      <div>
        <div className="footer">
          <p>Oguzhan Aydin</p>
        </div>
        <h1 className="header"> 4Gewinnt </h1>
        <div className="card">

          <BasicTextFields
              player1Name={player1Name}
              setPlayer1Name={setPlayer1Name}
              player2Name={player2Name}
              setPlayer2Name={setPlayer2Name}
          />

          <div className="buttons-container">
            <div className="Buttons"></div>
            <TextField
                value={`${params.gameId}`}
                className={"gameIdTf"}
                id="outlined-basic"
                label="Current Game ID"
            />
          </div>

        </div>
        <div className={"Board"}>
        <Board
            board={board}
            setBoard={setBoard}
            player1Name={player1Name}
            player2Name={player2Name}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            currentPlayerName={currentPlayerName}
            setCurrentPlayerName={setCurrentPlayerName}
        />
        </div>

      </div>
  );
}

export default App;
