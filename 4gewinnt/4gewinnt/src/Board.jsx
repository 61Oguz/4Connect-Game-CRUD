import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

function Board(props) {
  const params = useParams();

  const handleCellClick = (column) => {
    fetch(`http://localhost:8080/game/${params.gameId}/turn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        column: column,
        playerSymbol: props.currentPlayer,
      }),
    });
    props.setCurrentPlayer(props.currentPlayer === "X" ? "O" : "X");
  };
  return (
    <div className={"container"}>
      <Grid container spacing={0}>
        {props.board.map((column, columIndex) => (
          <Grid item xs={-1} key={columIndex}>
            {column.map((cell, cellIndex) => (
              <Card
                key={cellIndex}
                sx={{
                  height: { xs: 30, sm: 50, md: 100 },
                  width: { xs: 50, sm: 70, md: 120 },
                  border: "2px solid black",
                  flex: 0,
                }}
                onClick={() => handleCellClick(columIndex)}
              >
                <CardContent
                  style={{
                    backgroundColor:
                      cell === "X" ? "#ff0000" : cell === "O" ? "#09f109" : "",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {" "}
                </CardContent>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Board;
