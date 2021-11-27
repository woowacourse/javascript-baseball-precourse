import { $ } from "./utils.js";
import { checkUserInputVaild, getNumberArray } from "./userInput.js";
import { gameManager } from "./gameManager.js";
import { errorMessage, resultRender } from "./render.js";
import { RESULT_CODE, RESULT_TEXT } from "./constants.js";

const $userInput = $("#user-input");
const $submitButton = $("#submit");

export default class BaseballGame {
    constructor() {
        this.init();
    }

    init() {
        this.computerNumbers = gameManager.generateNumberArray;
        this.gameOver = false;

        resultRender.init();

        $userInput.value = "";
        $userInput.focus();

        $userInput.removeAttribute("disabled");
        $submitButton.removeAttribute("disabled");
    }

    play(computerInputNumbers, userInputNumbers) {
        const gameResult = gameManager.getGameResult(computerInputNumbers, userInputNumbers);
        if (gameResult.ball === 0 && gameResult.strike === 0) return RESULT_TEXT.GAME_HINT_NOTHING;

        const textJoinArray = [];
        if (gameResult.ball > 0) textJoinArray.push(gameResult.ball + RESULT_TEXT.GAME_HINT_BALL);
        if (gameResult.strike > 0) textJoinArray.push(gameResult.strike + RESULT_TEXT.GAME_HINT_STRIKE);

        if (gameResult.strike === 3) this.gameOver = true;

        return textJoinArray.join(" ");
    }

    drawResult(playResult) {
        if (this.gameOver === false) {
            $userInput.focus();
            resultRender.gameHint(playResult);
            return false;
        }

        resultRender.gameRetry(($retryButton) => {
            $userInput.setAttribute("disabled", "");
            $submitButton.setAttribute("disabled", "");

            $retryButton.addEventListener("click", this.init.bind(this));
        });
    }
}

const baseballGame = new BaseballGame();
$submitButton.addEventListener("click", onClickSubmitButton);

function onClickSubmitButton(event) {
    event.preventDefault();

    const checkVaildCode = checkUserInputVaild($userInput.value);
    if (checkVaildCode !== RESULT_CODE.DONE_USERINPUT_VALID) {
        errorMessage(checkVaildCode);
        $userInput.focus();
        return false;
    }

    const userNumbers = getNumberArray($userInput.value);
    const computerNumbers = baseballGame.computerNumbers;

    const playResult = baseballGame.play(userNumbers, computerNumbers);
    baseballGame.drawResult(playResult);
}
