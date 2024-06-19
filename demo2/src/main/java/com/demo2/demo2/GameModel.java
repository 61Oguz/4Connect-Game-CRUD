package com.demo2.demo2;

public class GameModel {

  private int column;

  private String playerSymbol;

  private String[][] board = new String[6][7];

  private PlayerNamesModel playerNames;

  private String winner;

  public  void setGameId(String gameId) {
    this.gameId = gameId;
  }

  private String gameId;

  public String getGameId() {
    return gameId;
  }

  public int getColumn() {
    return column;
  }

  public String getPlayerSymbol() {
    return playerSymbol;
  }

  public String[][] getBoard() {
    return board;
  }

  public void setBoard(String[][] board) {
    this.board = board;
  }

  public PlayerNamesModel getPlayerNames() {
    return playerNames;
  }

  public void setPlayerNames(PlayerNamesModel playerNames) {
    this.playerNames = playerNames;
  }

  public String getWinner() {
    return winner;
  }

  public void setWinner(String winner) {
    this.winner = winner;
  }
}
