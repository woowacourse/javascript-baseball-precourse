import { $ } from "./utils.js";
import { checkUserInputVaild, getNumberArray } from "./userInput.js";
import GameManager from "./gameManager.js";
import { errorMessage, resultRender } from "./render.js";
import { RESULT_CODE } from "./constants.js";

const $userInput = $("#user-input");
const $submitButton = $("#submit");

export default class BaseballGame {
    constructor() {}

    play(computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    }
}

const baseballGame = new BaseballGame();

$submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const checkVaildCode = checkUserInputVaild($userInput.value);
    if (checkVaildCode !== RESULT_CODE.DONE_USERINPUT_VALID) {
        errorMessage(checkVaildCode);
        return false;
    }

    const userNumbers = getNumberArray($userInput.value);
});
