import { DIGIT } from "./constants.js";
import UserInput from "./UserInput.js";

export default class BaseballGame {
    constructor() {
        this.setDOM();
        this.initGame();
    }

    setDOM() {
        this.resultGuide = document.querySelector('#result');
        this.restartGuide = document.querySelector('#restart');
        this.submitButton = document.querySelector('#submit');
        this.restartButton = document.querySelector('#game-restart-button');
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

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
  }

  new BaseballGame();