package com.demo2.demo2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class Contoller {

  @Autowired private GameHolder gameHolder;
  @Autowired private WinCheckService winCheckService;

  @PostMapping("/newgame")
  public String postNewGame(@RequestBody String gameId) {
    return gameHolder.createGame(gameId);
  }

  @GetMapping("/game/{gameId}")
  public GameModel getGame(@PathVariable("gameId") String gameId) {
    return gameHolder.getGame(gameId);
  }

  @GetMapping("/playernames/{gameId}")
  public PlayerNamesModel getPlayerNames(@PathVariable("gameId") String gameId) {
    return gameHolder.getGame(gameId).getPlayerNames();
  }

  @PostMapping("/playernames/{gameId}")
  public void setPlayerNames(
      @PathVariable("gameId") String gameId, @RequestBody PlayerNamesModel request) {
    gameHolder.getGame(gameId).setPlayerNames(request);
  }

  @DeleteMapping("/playernames/{gameId}")
  public void deletePlayerNames(@PathVariable("gameId") String gameId) {
    gameHolder.getGame(gameId).setPlayerNames(new PlayerNamesModel("", ""));
  }

  @DeleteMapping("/board/{gameId}")
  public void deleteBoard(@PathVariable("gameId") String gameId) {
    gameHolder.getGame(gameId).setBoard(new String[6][7]);
  }

  @PostMapping("/game/{gameId}/turn")
  public void turn(@PathVariable("gameId") String gameId, @RequestBody GameModel request) {
    int column = request.getColumn();
    String playerSymbol = request.getPlayerSymbol();
    String player1Name = gameHolder.getGame(gameId).getPlayerNames().getPlayer1Name();
    String player2Name = gameHolder.getGame(gameId).getPlayerNames().getPlayer2Name();

    for (int row = 6; row >= 0; row--) {
      if (gameHolder.getGame(gameId).getBoard()[column][row] == null) {
        gameHolder.getGame(gameId).getBoard()[column][row] = playerSymbol;
        break;
      }
    }
    if (winCheckService.checkWin(gameHolder.getGame(gameId).getBoard())) {
      if (playerSymbol.equals("X")) {
        gameHolder.getGame(gameId).setWinner("Game Over The Winner is: " + " " + player1Name);
      } else {
        gameHolder.getGame(gameId).setWinner("Game Over The Winner is: " + " " + player2Name);
      }
    }
  }
}
