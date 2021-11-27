import BaseballGame from "./game/baseballGame.js";
import validateInputNumber from "./utils/validateInputNumber.js";
import displayResult from "./game/displayResult.js";

const baseballGame = new BaseballGame();
const submitButton = document.getElementById("submit");

function playGame() {
    const userInput = document.getElementById("user-input");
    let resultString = "", state = true;

    if(validateInputNumber(userInput.value)) {
        resultString = baseballGame.play(userInput.value);
        state = displayResult(resultString);
        addReplayEvent(state);
    }else{
        alert("잘못된 값을 입력하였습니다!");
    }
}

function replayGame() {
    const replayButton = document.getElementById("game-restart-button");

    baseballGame.replay();
    replayButton.removeEventListener("click", replayGame);
    displayResult("초기화");
}

function addReplayEvent(state) {
    if(!state) {
        const replayButton = document.getElementById("game-restart-button");
        replayButton.addEventListener("click", replayGame);
    }
}

function init() {
    baseballGame.setComputerNumber();
    submitButton.addEventListener("click", playGame);
}

init();
