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
    constructor() {
        this.computerNumber = [];
    }

    setComputerNumber() {
        generateNumber(this.computerNumber);
    }

    play(userInputNumber) {
        let [strikes, balls] = judgeInputNumber(this.computerNumber, userInputNumber);
        return resultMessages(strikes, balls);
    }

    replay() {
        this.computerNumber = [];
        this.setComputerNumber();
    }
}

export default BaseballGame;
