package com.demo2.demo2;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class WinCheckServiceTest {

  @InjectMocks private WinCheckService classUnderTest;

  @Test
  void checkWinFourXInARow1() {
    // arrange
    String[][] board = {
      {"", "X", "X", "X", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };
    // act
    boolean result = classUnderTest.checkWin(board);
    // asserts
    assertTrue(result);
  }

  @Test
  void checkWinFourXInARow2() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "X", "X", "X", "X", "O", ""},
    };
    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourXInARow3() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "X", "X", "X", "X"},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };
    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourOInARow1() {
    String[][] board = {
      {"", "O", "O", "O", "O", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "X", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };
    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourOInARow2() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"O", "O", "O", "O", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };
    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourOInARow3() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"O", "O", "O", "O", "", "", ""},
      {"X", "X", "", "", "", "O", ""},
      {"X", "X", "O", "X", "", "O", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourXInAColumn1() {
    String[][] board = {
      {"", "X", "X", "", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "X", "", "", "", "O", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourXInAColumn2() {
    String[][] board = {
      {"", "X", "", "", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "X", "", "O", ""},
      {"", "", "", "X", "", "", ""},
      {"", "", "", "X", "", "O", ""},
      {"", "", "", "X", "", "O", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourXInAColumn3() {
    String[][] board = {
      {"", "X", "", "", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "X", "", "O", "X"},
      {"", "", "", "O", "", "", "X"},
      {"", "", "", "X", "", "O", "X"},
      {"", "", "", "X", "", "O", "X"},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourOInAColumn1() {
    String[][] board = {
      {"", "X", "", "X", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };
    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void checkWinFourOInAColumn2() {
    String[][] board = {
      {"", "X", "X", "", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"O", "", "", "", "", "O", ""},
      {"O", "", "", "", "", "X", ""},
      {"O", "", "", "", "", "O", ""},
      {"O", "", "", "", "", "O", ""},
    };
    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void CheckWinDiagonal1() {
    String[][] board = {
      {"X", "X", "X", "", "X", "", ""},
      {"", "X", "", "", "", "", ""},
      {"", "", "X", "", "", "O", ""},
      {"", "", "", "X", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void CheckWinDiagonal2() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "O", "", ""},
      {"", "", "", "O", "", "", ""},
      {"", "", "O", "", "", "", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void CheckWinDiagonal3() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "X", "", "", ""},
      {"", "", "X", "", "", "", ""},
      {"", "X", "", "", "", "", ""},
      {"X", "", "", "", "", "", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void CheckWinDiagonal4() {
    String[][] board = {
      {"", "X", "X", "O", "X", "", ""},
      {"", "X", "", "", "O", "", ""},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "X", "O"},
      {"", "", "", "", "", "O", ""},
      {"", "", "", "", "", "O", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertTrue(result);
  }

  @Test
  void CheckWinEmptyBoard() {
    String[][] board = {
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
      {"", "", "", "", "", "", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertFalse(result);
  }

  @Test
  void CheckWinEmptyBoard2() {
    boolean result = classUnderTest.checkWin(new String[0][0]);

    assertFalse(result);
  }

  @Test
  void CheckWinEmptyBigBoard() {
    boolean result = classUnderTest.checkWin(new String[10][10]);
    assertFalse(result);
  }

  @Test
  void CheckWinEmptySmallBoard() {
    boolean result = classUnderTest.checkWin(new String[5][6]);
    assertFalse(result);
  }

  @Test
  void CheckNoWin() {
    String[][] board = {
      {"O", "X", "X", "X", "O", "X", "O"},
      {"X", "O", "X", "O", "X", "O", "X"},
      {"X", "O", "O", "X", "", "X", ""},
      {"O", "", "", "", "O", "", ""},
      {"X", "O", "X", "", "", "", ""},
      {"", "", "O", "X", "", "", ""},
    };

    boolean result = classUnderTest.checkWin(board);
    assertFalse(result);
  }
}
