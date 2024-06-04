import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";

function Board(props) {
  /*const handleCellClick = (column) => {
    const newBoard = [...props.board];
    for (let row = 7; row > -1; row--) {
      if (newBoard[column][row] === "") {
        newBoard[column][row] = props.currentPlayer;
        props.setBoard(newBoard);

        fetch("http://localhost:8080/column", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ column: column }),
        });

        if (checkWin() && props.currentPlayer === "X") {

          const winner = props.currentPlayer === "X"? props.player1Name : props.player2Name;
          fetch("http://localhost:8080/winner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ winner: winner }),
          });

          alert(`${props.player1Name} has won!`);
        } else if (checkWin() && props.currentPlayer === "O") {

          const winner = props.currentPlayer === "X"? props.player1Name : props.player2Name;
          fetch("http://localhost:8080/winner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ winner: winner }),
          });
          alert(`${props.player2Name} has won!`);
        } else {
          props.setCurrentPlayer(props.currentPlayer === "X" ? "O" : "X");
          props.setCurrentPlayerName(
            props.currentPlayerName === props.player1Name
              ? props.player2Name
              : props.player1Name,
          );
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
          props.board[column][row] !== "" &&
          props.board[column][row] === props.board[column][row + 1] &&
          props.board[column][row] === props.board[column][row + 2] &&
          props.board[column][row] === props.board[column][row + 3]
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
          props.board[column][row] !== "" &&
          props.board[column][row] === props.board[column + 1][row + 1] &&
          props.board[column][row] === props.board[column + 2][row + 2] &&
          props.board[column][row] === props.board[column + 3][row + 3]
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
          props.board[column][row] !== "" &&
          props.board[column][row] === props.board[column + 1][row - 1] &&
          props.board[column][row] === props.board[column + 2][row - 2] &&
          props.board[column][row] === props.board[column + 3][row - 3]
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
          props.board[column][row] !== "" &&
          props.board[column][row] === props.board[column + 1][row] &&
          props.board[column][row] === props.board[column + 2][row] &&
          props.board[column][row] === props.board[column + 3][row]
        ) {
          return true;
        }
      }
    }
    return false;
  };*/

  const handleCellClick = (column) => {
    fetch("http://localhost:8080/markCell", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ column: column, playerSymbol: props.currentPlayer }),
    })
        .then((response) => response.json())
        .then((updatedBoard) => props.setBoard(updatedBoard));
        props.setCurrentPlayer(props.currentPlayer === "X" ? "O" : "X");
  };
  return (
    <div className={"container"}>
      <Grid container spacing={0}>
        {props.board.map((column, columIndex) => (
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
