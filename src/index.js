import UserInputModel from "./model/userInput.js";
import GameRuleModel from "./model/gameRules.js";

export default class BaseballGame {
    constructor() {
        const test = new GameRuleModel();
        console.log(test.answer);
    }

    play(computerInputNumbers, userInputNumbers) {}
}

new BaseballGame();
