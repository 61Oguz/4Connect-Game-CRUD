import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";

function WelcomePage() {
  const [gameId, setGameId] = useState("");
  const navigate = useNavigate();

  const handleGameIdChange = (event) => {
    setGameId(event.target.value);
  };

  const handleCreateButtonClick = () => {
    navigate(`/game/${gameId}`);
  };


  return (
    <div className={"welcomePage"}>
      <h1>Welcome to 4Gewinnt!</h1>
      <div className={"inputContainer"}>
        <p>Enter your game ID to start playing</p>
        <TextField
          label="Game ID"
          variant="outlined"
          value={gameId}
          onChange={handleGameIdChange}
        />
        <Button
          className={"connectButton"}
          variant="contained"
          color="success"
          startIcon={<SendIcon />}
          onClick={handleCreateButtonClick}
        >
          Connect to the game
        </Button>
      </div>
    </div>
  );
}

export default WelcomePage;
