import BaseballGame from "./baseballgame.js";

function init() {
    const baseballGame = new BaseballGame();

    baseballGame.setComputerNumber();
    console.log(baseballGame.computerNumber);
}

init();
