import BaseballGame from "./game/baseballGame.js";
import validateInputNumber from "./utils/validateInputNumber.js";
import displayResult from "./game/displayResult.js";

const baseballGame = new BaseballGame();
const submitButton = document.getElementById("submit");
const userInput = document.getElementById("user-input");

function playGame() {
    let resultString = "", state = true;

    if(validateInputNumber(userInput.value)) {
        resultString = baseballGame.play(userInput.value);
        state = displayResult(resultString);
        addReplayEvent(state);
    }else{
        alert("잘못된 값을 입력하였습니다!");
        clearUserInput();
    }
}

function replayGame() {
    const replayButton = document.getElementById("game-restart-button");

    baseballGame.replay();
    replayButton.removeEventListener("click", replayGame);
    displayResult("초기화");
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
