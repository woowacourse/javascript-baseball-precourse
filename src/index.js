import showResult from "./showResult.js";
import validateInputNumber from "./validateInputNumber.js";
import makeComputerNumbers from "./makeComputerNumbers.js";

export default function BaseballGame() {
    function play(computerInputNumbers, userInputNumbers) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < userInputNumbers.length; i++) {
            if (Number(userInputNumbers[i]) === computerInputNumbers[i]) {
                strike += 1;
            } else if (
                computerInputNumbers.includes(Number(userInputNumbers[i]))
            ) {
                ball += 1;
            }
        }
        const result = showResult(ball, strike);
        return result;
    }
    function init() {
        const button = document.querySelector("#submit");
        const result = document.querySelector("#result");
        const userInput = document.querySelector("#user-input");
        const reStartDiv = document.createElement("div");
        const reStartButton = document.createElement("button");

        let computerInputNumbers = makeComputerNumbers();
        console.log(computerInputNumbers);

        button.addEventListener("click", handleSubmitClick);
        reStartButton.addEventListener("click", reStart);

        function getUserInputNumbers() {
            return userInput.value.split("");
        }

        function handleSubmitClick() {
            const userInputNumbers = getUserInputNumbers();
            const isValidate = validateInputNumber(userInputNumbers);
            if (isValidate) {
                const [resultText] = play(
                    computerInputNumbers,
                    userInputNumbers
                );
                afterClickSettings(resultText);
                showRestartButton(resultText);
            } else {
                alert("다시 입력하세요.");
                afterClickSettings("");
            }
        }

        function showRestartButton(resultText) {
            if (resultText === "정답을 맞추셨습니다!") {
                reStartDiv.textContent = "게임을 새로 시작하시겠습니까?";
                reStartButton.textContent = "재실행";
                result.appendChild(reStartDiv);
                reStartDiv.appendChild(reStartButton);
            }
        }

        function afterClickSettings(textContent) {
            result.textContent = textContent;
            userInput.value = "";
            userInput.focus();
            reStartDiv.textContent = "";
        }

        function reStart() {
            afterClickSettings("");
            computerInputNumbers = makeComputerNumbers();
            console.log(computerInputNumbers);
        }
    }
    init();
}

new BaseballGame();
