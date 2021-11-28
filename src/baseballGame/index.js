import { RESULT_CODE } from "../data/constants.js";
import { $userInput } from "../data/elements.js";
import { gameRules } from "./gameRules.js";
import { checkUserInputVaild, getNumberArray } from "./userInputCheck.js";
import { errorMessage, gameRender } from "./gameRender.js";

class BaseballGame {
    constructor() {
        this.init();
    }

    init() {
        this.computerNumbers = gameRules.getComputerNumbers;
        this.isGameComplate = false;

        gameRender.init();
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
        this.draw(playResult);
    }

    play(computerInputNumbers, userInputNumbers) {
        const gameResult = gameRules.getGameResult(computerInputNumbers, userInputNumbers);
        this.isGameComplate = gameResult.isGameComplate;

        return gameRules.getGameHintText(gameResult.strike, gameResult.ball);
    }

    draw(playResult) {
        if (this.isGameComplate === false) {
            gameRender.gameHint(playResult);
            return false;
        }

        gameRender.gameRetry(($restartButton) => {
            $restartButton.addEventListener("click", this.init.bind(this));
        });
    }
}

export const baseballGame = new BaseballGame();
