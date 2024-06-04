package com.demo2.demo2;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class Contoller {

    @Autowired
    private GameHolder gameHolder;

    private PlayerNamesModel playerNames;


    private List<String> chat = new ArrayList<>();

    private String turn;

    private int column;

    private String winner;

    private String winnerName ;

    public void setBoard(String[][] board) {
        gameHolder.getGame("gameId").setBoard(board);
    }

    @PostConstruct
    public void init() {
        gameHolder.createGame();
    }

    @PostMapping("/newgame")
    public String postNewGame() {
        return gameHolder.createGame();
    }


    /**
     * GET .../game/<gameId>
     * @param gameId  the id of the game.
     * @return
     */
    @GetMapping("/game/{gameId}")
    public GameModel getGame(@PathVariable("gameId") String gameId) {
        return gameHolder.getGame(gameId);
    }

    @GetMapping("/playernames")
    public PlayerNamesModel getPlayerNames() {
        return playerNames;
    }

    @PostMapping("/playernames")
    public void setPlayer1Name(@RequestBody PlayerNamesModel request) {
        System.out.println("Player 1 name (neu): " + request.getPlayer1Name());
        this.playerNames = request;
    }
    @DeleteMapping("/playernames")
    public void deletePlayerNames() {
        getPlayerNames().setPlayer1Name("");
        getPlayerNames().setPlayer2Name("");
    }

    @PostMapping("/message")
    public void addChatMessage(@RequestBody MessageModel request) {
        this.chat.add(request.getMessage());
    }

    @GetMapping("/chat")
    public List<String> getChatMessages() {
        return this.chat;
    }

    @DeleteMapping("/chat")
    public void deleteAllChatMessages() {
        this.chat.clear();
    }

    @GetMapping("/winner")
    public String getWinner() {
        return winner;
    }

    @GetMapping("/markCell")
    public String [][] getMarkedBoard(){
        return gameHolder.getGame("gameId").getBoard();
    }

    @DeleteMapping("/board")
    public void deleteBoard() {
        gameHolder.getGame("gameId").setBoard(new String[6][7]);
    }

    @GetMapping("/board")
    public String[][] getBoard() {
        return gameHolder.getGame("gameId").getBoard();
    }

    @PostMapping("/markCell")
    public String[][] markCell(@RequestBody MarkCellRequest request) {
        int column = request.getColumn();
        String playerSymbol = request.getPlayerSymbol();

        for (int row = 6; row >= 0; row--) {
            if (gameHolder.getGame("gameId").getBoard()[column][row] == null) {
                gameHolder.getGame("gameId").getBoard()[column][row] = playerSymbol;
                break;
            }
        }
        if (checkWin(gameHolder.getGame("gameId").getBoard())) {
            winner = playerSymbol;
            if (playerSymbol.equals("X")) {
                winnerName = getPlayerNames().getPlayer1Name();
            } else {
                winnerName = getPlayerNames().getPlayer2Name();
            }

        }

        return gameHolder.getGame("gameId").getBoard();
    }

    public boolean checkWin(String[][] board) {

        for (int column = 0; column < 6; column++) {
            for (int row = 0; row < 4; row++) {
                if (
                        board[column][row] != null &&
                                board[column][row].equals(board[column][row + 1]) &&
                                board[column][row].equals(board[column][row + 2]) &&
                                board[column][row].equals(board[column][row + 3])
                ) {
                    return true;
                }
            }
        }
        for (int column = 0; column < 3; column++) {
            for (int row = 0; row < 4; row++) {
                if (
                        board[column][row] != null &&
                                board[column][row].equals(board[column + 1][row + 1]) &&
                                board[column][row].equals(board[column + 2][row + 2]) &&
                                board[column][row].equals(board[column + 3][row + 3])
                ) {
                    return true;
                }
            }
        }
        for (int column = 0; column < 3; column++) {
            for (int row = 3; row < 7; row++) {
                if (
                        board[column][row] != null &&
                                board[column][row].equals(board[column + 1][row - 1]) &&
                                board[column][row].equals(board[column + 2][row - 2]) &&
                                board[column][row].equals(board[column + 3][row - 3])
                ) {
                    return true;
                }
            }
        }
        for (int row = 0; row < 7; row++) {
            for (int column = 0; column < 3; column++) {
                if (
                        board[column][row] != null &&
                                board[column][row].equals(board[column + 1][row]) &&
                                board[column][row].equals(board[column + 2][row]) &&
                                board[column][row].equals(board[column + 3][row])
                ) {
                    return true;
                }
            }
        }
        return false;
    }

}
