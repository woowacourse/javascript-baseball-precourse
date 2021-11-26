import BaseballGame from "./baseballgame.js";
import validateNumber from "./validateNumber.js";

function playGame() {
    const userInput = document.getElementById("user-input");
    alert(validateNumber(userInput.value));
}

function init() {
    const baseballGame = new BaseballGame();
    const submitButton = document.getElementById("submit");

    baseballGame.setComputerNumber();
    submitButton.addEventListener("click", playGame);
}

init();
