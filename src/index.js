import BaseballGame from "./baseballgame.js";
import validateNumber from "./validateNumber.js";

const baseballGame = new BaseballGame();

function playGame() {
    const userInput = document.getElementById("user-input");
    let resultString;

    if(validateNumber(userInput.value)) {
        resultString = baseballGame.play(userInput.value);
        alert(resultString);
    }else{
        alert("잘못된 값을 입력하였습니다!");
    }
}

function init() {
    const submitButton = document.getElementById("submit");

    baseballGame.setComputerNumber();
    submitButton.addEventListener("click", playGame);
}

init();
