import judgeNumber from "./judgeNumber.js";
import resultMessages from "./resultMessages.js";

function uniqueNumberPush(computerNumber, randomNumber) {
    if(!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
    }
}

export default class BaseballGame {
    constructor() {
        this.computerNumber = [];
    }

    setComputerNumber() {
        while(this.computerNumber.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            uniqueNumberPush(this.computerNumber, randomNumber);
        }
    }

    play(userInputNumber) {
        let [strikes, balls] = judgeNumber(this.computerNumber, userInputNumber);
        return resultMessages(strikes, balls);
    }
}
