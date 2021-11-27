import { CORRECT_ANSWER_MESSAGE, DIGIT, ERROR_MESSAGE, NOTHING_MESSAGE } from "./constants.js";
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
            if ( !this.isGameOver ) this.checkAnswer();
        });
        document.querySelector('#game-restart-button').addEventListener("click", () => { this.initGame(); });
    }

    initGame() {
        this.computerNumbers = this.createComputerNumbers();
        this.isGameOver = false;
        UserInput.clear();
        this.clearResultGuide();
        this.hideRestartGuide();
        console.log(this.computerNumbers);
    }

    clearResultGuide() {
        this.resultGuide.innerHTML = '';
    }

    printResultGuide(result) {
        this.resultGuide.innerHTML = result;
    }

    hideRestartGuide() {
        this.restartGuide.hidden = true;
    }

    showRestartGuide() {
        this.restartGuide.hidden = false;
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
        if ( !UserInput.isValid(userInputNumbers) ) {
            alert(ERROR_MESSAGE);
            UserInput.clear();
            this.clearResultGuide();
        }
        const result = this.play(this.computerNumbers, userInputNumbers);
        this.printResultGuide(result);
        if ( this.isCorrectAnswer(result) ) {
            this.isGameOver = true;
            this.showRestartGuide();
        }
    }

    isCorrectAnswer(result) {
        return result.includes('정답');
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