import judgeInputNumber from "../utils/judgeInputNumber.js";

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
        this.state.gameState = true;
    }

    setComputerNumber() {
        generateNumber(this.state.computerNumber);
    }

    getState() {
        return this.state;
    }

    play(userInputNumber) {
        judgeInputNumber(this.state, userInputNumber);
        if(this.state.strikes === 3) this.state.gameState = false;
        return this.state;
    }

    replay() {
        this.state.gameState = true;
        this.state.computerNumber = [];
        this.setComputerNumber();
    }
}

export default BaseballGame;
