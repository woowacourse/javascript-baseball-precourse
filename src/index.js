import { $ } from "./utils.js";
import { checkUserInputVaild, getNumberArray } from "./userInput.js";
import { gameManager } from "./gameManager.js";
import { errorMessage, resultRender } from "./render.js";
import { RESULT_CODE, RESULT_TEXT } from "./constants.js";
import { $userInput, $submit } from "./elements.js";

export default class BaseballGame {
    constructor() {
        this.init();
    }

    init() {
        this.computerNumbers = gameManager.generateNumberArray;
        this.gameOver = false;

        resultRender.init();
    }

    play(computerInputNumbers, userInputNumbers) {
        const gameResult = gameManager.getGameResult(computerInputNumbers, userInputNumbers);
        const gameHintText = gameManager.getGameHintText(gameResult.strike, gameResult.ball);

        if (gameResult.strike === 3) this.gameOver = true;
        return gameHintText;
    }

    drawResult(playResult) {
        if (this.gameOver === false) {
            resultRender.gameHint(playResult);
            return false;
        }

        resultRender.gameRetry(($retryButton) => {
            $retryButton.addEventListener("click", this.init.bind(this));
        });
    }
}

const baseballGame = new BaseballGame();
$submit.addEventListener("click", onClickSubmitButton);

function onClickSubmitButton(event) {
    event.preventDefault();

    const checkVaildCode = checkUserInputVaild($userInput.value);
    if (checkVaildCode !== RESULT_CODE.DONE_USERINPUT_VALID) {
        errorMessage(checkVaildCode);
        return false;
    }

    const userNumbers = getNumberArray($userInput.value);
    const computerNumbers = baseballGame.computerNumbers;

    const playResult = baseballGame.play(userNumbers, computerNumbers);
    baseballGame.drawResult(playResult);
}
