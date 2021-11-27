import { checkUserInputVaild, getNumberArray } from "./userInputChecker.js";
import { gameRules } from "./gameRules.js";
import { errorMessage, resultRender } from "./resultRenderer.js";
import { RESULT_CODE } from "../data/constants.js";
import { $userInput } from "../data/elements.js";

export default class BaseballGame {
    constructor() {
        this.init();
    }

    init() {
        this.computerNumbers = gameRules.generateNumberArray;
        this.gameOver = false;

        resultRender.init();
    }

    start() {
        const checkVaildCode = checkUserInputVaild($userInput.value);
        if (checkVaildCode !== RESULT_CODE.DONE_USERINPUT_VALID) {
            errorMessage(checkVaildCode);
            return false;
        }

        const userNumbers = getNumberArray($userInput.value);
        const computerNumbers = this.computerNumbers;

        const playResult = this.play(userNumbers, computerNumbers);
        this.drawResult(playResult);
    }

    play(computerInputNumbers, userInputNumbers) {
        const gameResult = gameRules.getGameResult(computerInputNumbers, userInputNumbers);
        const gameHintText = gameRules.getGameHintText(gameResult.strike, gameResult.ball);

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

export const baseballGame = new BaseballGame();
