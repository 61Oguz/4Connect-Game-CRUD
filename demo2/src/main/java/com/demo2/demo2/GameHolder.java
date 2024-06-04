package com.demo2.demo2;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Component
public class GameHolder {

    private Map<String, GameModel> games = new HashMap<>(); // mapping gameId to Game

    public String createGame() {
        //String gameId = UUID.randomUUID().toString();
        games.put("gameId", new GameModel());
        return "gameId";
    }

    public GameModel getGame(String gameId) {
        return games.get(gameId);
    }
}
