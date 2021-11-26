import UserInputModel from "./model/userInput.js";
import UserInputView from "./view/userInput.js";

import GameRuleModel from "./model/gameRules.js";

export default class BaseballGame {
    constructor() {
        const test = new GameRuleModel();
        console.log(test.answer, test.getGameHint([1, 2, 3]));
    }

    play(computerInputNumbers, userInputNumbers) {}
}

new BaseballGame();
