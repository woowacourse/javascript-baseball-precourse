export default class BaseballGame {
    constructor() {
        this.setDOM();
        this.initGame();
    }

    setDOM() {
        this.userInput = document.querySelector('#user-input');
        this.resultGuide = document.querySelector('#result');
        this.restartGuide = document.querySelector('#restart');
        this.submitButton = document.querySelector('#submit');
        this.restartButton = document.querySelector('#game-restart-button');
    }

    initGame() {
        this.computerNumbers = this.createComputerNumbers();
        this.clearResult();
        this.clearUserInput();
        this.hideRestartGuide();
        console.log(this.computerNumbers);
    }

    clearResult() {
        this.resultGuide.innerHTML = '';
    }

    clearUserInput() {
        this.userInput.value = '';
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

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
  }

  new BaseballGame();