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
        this.computerNumbers = this.createComputerNumbers();
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
    }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
}

new BaseballGame();