import BaseballGame from "./game/baseballGame.js";
import validateInputNumber from "./utils/validateInputNumber.js";
import GameResult from "./view/GameResult.js";

const baseballGame = new BaseballGame();
const gameResult = new GameResult("#result");
const submitButton = document.getElementById("submit");
const userInput = document.getElementById("user-input");

function playGame() {
    if(validateInputNumber(userInput.value)) {
        baseballGame.play(userInput.value);
        gameResult.render(baseballGame.getState());
        addReplayEvent(baseballGame.getState().gameState);
    }else{
        alert("잘못된 값을 입력하였습니다!");
        clearUserInput();
    }
}

function replayGame() {
    const replayButton = document.getElementById("game-restart-button");

    replayButton.removeEventListener("click", replayGame);
    baseballGame.replay();
    gameResult.render("reset");
    clearUserInput();
}

function addReplayEvent(state) {
    if(!state) {
        const replayButton = document.getElementById("game-restart-button");
        replayButton.addEventListener("click", replayGame);
    }
}

function clearUserInput() {
    userInput.value = "";
}

function init() {
    baseballGame.setComputerNumber();
    submitButton.addEventListener("click", playGame);
}

init();
