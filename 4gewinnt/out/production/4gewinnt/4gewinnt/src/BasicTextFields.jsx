import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Board from "./Board.jsx";

export default function BasicTextFields(props) {
  function handlePlayer1NameChange(event) {
    props.setPlayer1Name(event.target.value);
  }

  function handlePlayer2NameChange(event) {
    props.setPlayer2Name(event.target.value);
  }

  function handleReset() {
    props.setPlayer1Name("");
    props.setPlayer2Name("");
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
        <div className={"Buttons"}>
          <Button variant="contained" onClick={handleReset}>
            Reset The Game
          </Button>
          <h1>Player1: {props.player1Name}</h1>
          <h1>Player2: {props.player2Name}</h1>
        </div>
      </div>
    </div>
  );
}
