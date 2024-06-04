import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";

function Board(props) {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleCellClick = (column) => {
    const newBoard = [...board];
    for (let row = 7; row > -1; row--) {
      if (newBoard[column][row] === "") {
        newBoard[column][row] = currentPlayer;
        setBoard(newBoard);
        if (checkWin() && currentPlayer === "X") {
          alert(`${props.player1Name} has won!`);
        } else if (checkWin() && currentPlayer === "O") {
          alert(`${props.player2Name} has won!`);
        } else {
          setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
        break;
      }
    }
  };

  const checkWin = () => {
    return (
      checkVerticalWin() ||
      checkHorizontalWin() ||
      checkDiagonalWin() ||
      checkSecondDiagonalWin()
    );
  };

  const checkHorizontalWin = () => {
    for (let column = 0; column < 6; column++) {
      for (let row = 0; row < 4; row++) {
        if (
          board[column][row] !== "" &&
          board[column][row] === board[column][row + 1] &&
          board[column][row] === board[column][row + 2] &&
          board[column][row] === board[column][row + 3]
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const checkDiagonalWin = () => {
    for (let column = 0; column < 3; column++) {
      for (let row = 0; row < 4; row++) {
        if (
          board[column][row] !== "" &&
          board[column][row] === board[column + 1][row + 1] &&
          board[column][row] === board[column + 2][row + 2] &&
          board[column][row] === board[column + 3][row + 3]
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const checkSecondDiagonalWin = () => {
    for (let column = 0; column < 3; column++) {
      for (let row = 3; row < 7; row++) {
        if (
          board[column][row] !== "" &&
          board[column][row] === board[column + 1][row - 1] &&
          board[column][row] === board[column + 2][row - 2] &&
          board[column][row] === board[column + 3][row - 3]
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const checkVerticalWin = () => {
    for (let row = 0; row < 7; row++) {
      for (let column = 0; column < 3; column++) {
        if (
            board[column][row] !== "" &&
            board[column][row] === board[column + 1][row] &&
            board[column][row] === board[column + 2][row] &&
            board[column][row] === board[column + 3][row]
        ) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <div className={"container"}>
      <Grid container spacing={0}>
        {board.map((column, columIndex) => (
          <Grid item xs={0} key={columIndex}>
            {column.map((cell, cellIndex) => (
              <Card
                key={cellIndex}
                sx={{
                  height: 100,
                  width: 100,
                  border: "2px solid black",
                }}
                onClick={() => handleCellClick(columIndex)}
              >
                <CardContent>{cell}</CardContent>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Board;
