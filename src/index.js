import { pickRandomNumbers, isValidInputNumbers } from "./utils.js";

export default function BaseballGame() {
    let computerInputNumbers = pickRandomNumbers();
    console.log(computerInputNumbers);

    const $userInput = document.getElementById("user-input");
    const $submitButton = document.getElementById("submit");
    const $resultDiv = document.getElementById("result");
    const $resetButton = document.createElement("button");
    $resetButton.innerHTML = "게임 재시작";
    $resetButton.id = "game-restart-button";

    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };

    function handleInputNumbers(event) {
        event.preventDefault();
        const userInputNumbers = $userInput.value;
        console.log(userInputNumbers);
        if (!isValidInputNumbers(userInputNumbers)) {
            $userInput.value = "";
            return;
        }
    }

    $submitButton.addEventListener("click", handleInputNumbers);
}

new BaseballGame();
