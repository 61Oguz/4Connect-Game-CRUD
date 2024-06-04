import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./Board.jsx";
import BasicTextFields from "./BasicTextFields.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [currentPlayerName, setCurrentPlayerName] = useState(player1Name);

  useEffect(() => {
    fetch("http://localhost:8080/markCell").then((response) => {
      response.json().then((data) => {
        setBoard(data);
        console.log("board:", data);
      });
    });
    fetch("http://localhost:8080/playernames").then((response) => {
      response.json().then((data) => {
        setPlayer1Name(data.player1Name);
        setPlayer2Name(data.player2Name);
        console.log("response:", data);
      });
    });

    setInterval(() => {
      fetch("http://localhost:8080/chat").then((response) => {
        response.json().then((data) => {
          console.log("response:", data);
          setChat(data);
        });
      });
    }, 500);

    setInterval(() => {
      fetch("http://localhost:8080/board").then((response) => {
        response.json().then((data) => {
          setBoard(data);
        });
      });
    }, 1000);
  }, []);

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

      <div className="buttons-container">
        <div className="Buttons"></div>
        <TextField
          className={"gameIdTf"}
          id="outlined-basic"
          label="Game ID"
          variant="outlined"
        />
      </div>

      <Button
        size="small"
        color="success"
        variant="contained"
        startIcon={<SendIcon />}
      >
        Connect to the game
      </Button>

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
      <div className={"ChatWrapper"}>
        <input
          type={"text"}
          placeholder={"Type Your Message"}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button onClick={() => sendMessage(message)}>Send Message</button>
        <ul>
          {chat.map((msg) => (
            <li> {msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  function sendMessage(message) {
    fetch("http://localhost:8080/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message }),
    });
  }
}

export default App;
