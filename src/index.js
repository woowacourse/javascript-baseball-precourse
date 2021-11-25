import UserInputModel from "./model/userInput.js";

export default class BaseballGame {
    constructor() {
        const test = new UserInputModel("321");
        console.log(test.checkInputValid);
        console.log(test.toNumberArray);
    }

    play(computerInputNumbers, userInputNumbers) {}
}

new BaseballGame();
