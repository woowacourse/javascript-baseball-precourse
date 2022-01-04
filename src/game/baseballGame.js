import judgeInputNumber from "../utils/judgeInputNumber.js";
import resultMessages from "./resultMessages.js";

function uniqueNumberPush(computerNumber, randomNumber) {
    if(!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
    }
}

function generateNumber(computerNumber) {
    while(computerNumber.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        uniqueNumberPush(computerNumber, randomNumber);
    }
}

class BaseballGame {
    state = {};

    constructor() {
        this.state.computerNumber = [];
    }

    setComputerNumber() {
        generateNumber(this.state.computerNumber);
    }

    getState() {
        return this.state;
    }


    play(userInputNumber) {
        judgeInputNumber(this.state, userInputNumber);
        return this.state;
    }

    replay() {
        this.state.computerNumber = [];
        this.setComputerNumber();
    }
}

export default BaseballGame;
