package com.demo2.demo2;

public class MarkCellRequest {
    private int column ;

    private String playerSymbol;

    public String getPlayerSymbol() {
        return playerSymbol;
    }

    public void setPlayer(String playerSymbol) {
        this.playerSymbol = playerSymbol;
    }

    public int getColumn() {
        return column;
    }

    public void setColumn(int column) {
        this.column = column;
    }
}
