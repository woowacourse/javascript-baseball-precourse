import { $ } from "./utils.js";
import checkUserInputVaild from "./userInput.js";
import GameManager from "./gameManager.js";

const $userInput = $("#user-input");
const $submitButton = $("#submit");
const $resultWrap = $("#result");

export default class BaseballGame {
    play(computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    }
}

new BaseballGame();

$submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(new GameManager().getGameResult([1, 2, 3], [1, 2, 3]));
});
