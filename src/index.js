import { $ } from "./utils.js";
import checkUserInputVaild from "./userInput.js";

const $userInput = $("#user-input");
const $submitButton = $("#submit");
const $result = $("#result");

export default class BaseballGame {
    play(computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    }
}

new BaseballGame();

$submitButton.addEventListener("click", (event) => {
    event.preventDefault();
});
