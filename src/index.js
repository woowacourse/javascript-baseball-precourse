import { CORRECT_ANSWER_MESSAGE, DIGIT, NOTHING_MESSAGE } from "./constants.js";
import UserInput from "./UserInput.js";

export default class BaseballGame {
    constructor() {
        this.setDOM();
        this.initGame();
    }

    setDOM() {
        this.resultGuide = document.querySelector('#result');
        this.restartGuide = document.querySelector('#restart');
        document.querySelector('#submit').addEventListener("click", (e) => {
            e.preventDefault();
            this.checkAnswer();
        });
        document.querySelector('#game-restart-button').addEventListener("click", this.initGame);
    }

    initGame() {
        this.computerNumbers = [1, 2, 3];
        // this.computerNumbers = this.createComputerNumbers();
        this.clearResultGuide();
        UserInput.clearUserInput();
        this.hideRestartGuide();
        console.log(this.computerNumbers);
    }

    clearResultGuide() {
        this.resultGuide.innerHTML = '';
    }

    hideRestartGuide() {
        this.restartGuide.hidden = true;
    }

    createComputerNumbers() {
        let computerNumbers = [];
        while( computerNumbers.length !== 3 ) {
            const curNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if ( !computerNumbers.includes(curNum) ) 
                computerNumbers.push(curNum);
        }
        return computerNumbers;
    }

    checkAnswer() {
        const userInputNumbers = UserInput.getNumbers();
        console.log(userInputNumbers, UserInput.isValid(userInputNumbers));
        console.log(this.play(this.computerNumbers, userInputNumbers));
    }

    play(computerInputNumbers, userInputNumbers) {
        const numberOfBalls = this.getNumberOfBalls(computerInputNumbers, userInputNumbers);
        const numberOfStrikes = this.getNumberOfStrikes(computerInputNumbers, userInputNumbers);
        if (numberOfBalls === 0 && numberOfStrikes === 0) return NOTHING_MESSAGE;
        if (numberOfStrikes === DIGIT) return CORRECT_ANSWER_MESSAGE;

        let result = '';
        if (numberOfBalls) result += `${numberOfBalls}볼 `;
        if (numberOfStrikes) result += `${numberOfStrikes}스트라이크`;
        return result;
    }

    getNumberOfBalls(computerInputNumbers, userInputNumbers) {
        return computerInputNumbers.filter((number, index) => {
            const indexOfUserInputNumber = userInputNumbers.indexOf(number);
            return indexOfUserInputNumber !== -1 && indexOfUserInputNumber !== index;
        }).length;
    }

    getNumberOfStrikes(computerInputNumbers, userInputNumbers) {
        return computerInputNumbers.filter((number, index) => {
            return number === userInputNumbers[index]
        }).length;
    }
}

new BaseballGame();