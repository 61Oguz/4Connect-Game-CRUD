package com.demo2.demo2;

import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class WinCheckService {

  public boolean checkWin(String[][] board) {

    if (board.length < 6 || board[0].length < 7) {
      return false;
    } else if (board.length > 7 || board[0].length > 7) {
      return false;
    }
    for (int column = 0; column < 6; column++) {
      for (int row = 0; row < 4; row++) {
        if (board[column][row] != null
            && !board[column][row].equals("")
            && board[column][row].equals(board[column][row + 1])
            && board[column][row].equals(board[column][row + 2])
            && board[column][row].equals(board[column][row + 3])) {
          return true;
        }
      }
    }
    for (int column = 0; column < 3; column++) {
      for (int row = 0; row < 4; row++) {
        if (board[column][row] != null
            && !board[column][row].equals("")
            && board[column][row].equals(board[column + 1][row + 1])
            && board[column][row].equals(board[column + 2][row + 2])
            && board[column][row].equals(board[column + 3][row + 3])) {
          return true;
        }
      }
    }
    for (int column = 0; column < 3; column++) {
      for (int row = 3; row < 7; row++) {
        if (board[column][row] != null
            && !board[column][row].equals("")
            && board[column][row].equals(board[column + 1][row - 1])
            && board[column][row].equals(board[column + 2][row - 2])
            && board[column][row].equals(board[column + 3][row - 3])) {
          return true;
        }
      }
    }
    for (int row = 0; row < 7; row++) {
      for (int column = 0; column < 3; column++) {
        if (board[column][row] != null
            && !board[column][row].equals("")
            && board[column][row].equals(board[column + 1][row])
            && board[column][row].equals(board[column + 2][row])
            && board[column][row].equals(board[column + 3][row])) {
          return true;
        }
      }
    }
    return false;
  }
}
