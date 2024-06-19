import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";


export default function BasicTextFields(props) {
  function handlePlayer1NameChange(event) {
    props.setPlayer1Name(event.target.value);
  }

  function handlePlayer2NameChange(event) {
    props.setPlayer2Name(event.target.value);
  }

  const deletePlayerNames = () => {
    fetch("http://localhost:8080/playernames", {
      method: "DELETE",
    });
    props.setPlayer1Name("");
    props.setPlayer2Name("");
  };

  const deleteBoard = () => {
    fetch("http://localhost:8080/board", {
      method: "DELETE",
    });
  };

  function setPlayerNames(player1name, player2name) {
    fetch("http://localhost:8080/playernames", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player1Name: player1name,
        player2Name: player2name,
      }),
    });

  }
  return (
    <div>
      <div className={"TextFields"}>
        <TextField
          id="outlined-basic"
          label="Player 1 "
          variant="outlined"
          value={props.player1Name}
          onChange={handlePlayer1NameChange}
        />
        <TextField
          id="outlined-basic"
          label="Player 2"
          variant="outlined"
          value={props.player2Name}
          onChange={handlePlayer2NameChange}
        />
        <h2>Player1: {props.player1Name}</h2>
        <h2>Player2: {props.player2Name}</h2>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={() => setPlayerNames(props.player1Name, props.player2Name)}
        >
          Save Player Names
        </Button>
        <div className={"Buttons"}>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={deletePlayerNames}
            startIcon={<DeleteIcon />}
          >
            Reset The Names
          </Button>
        </div>
        <div>
          <Button
            size="small"
            startIcon={<DeleteIcon />}
            color="error"
            variant="contained"
            onClick={() => deleteBoard()}
          >
            Reset the Board
          </Button>
        </div>
      </div>
    </div>
  );
}
