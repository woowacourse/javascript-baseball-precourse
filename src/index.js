import { NUMBER_RULES, RESULT_MESSAGE, VERIFIED_CODE } from './constants.js';
export default class BaseballGame {
  constructor() {
    this.$userInput = document.getElementById('user-input');
    this.$submitButton = document.getElementById('submit');
    this.$result = document.getElementById('result');
    this.computerNumbers = this.generateComputerRandomNumber();
    this.score = { 
      ball: 0, 
      strike: 0,
    };
  }

  play(computerInputNumbers, userInputNumbers) {
    this.computeScore(computerInputNumbers, userInputNumbers);
    this.resetScore();
  }

  generateComputerRandomNumber() {
    const computerNumberList =  new Set();

    while (computerNumberList.size < NUMBER_RULES.LENGTH)
      computerNumberList.add(MissionUtils.Random.pickNumberInRange(NUMBER_RULES.MIN_NUMBER, NUMBER_RULES.MAX_NUMBER));

    return Array.from(computerNumberList).join('');
  }

  verifyInputNumber(userInputValue) {
    if (isNaN(userInputValue)) {
      return VERIFIED_CODE.NOT_A_NUMBER;
    } else if (userInputValue.length !== NUMBER_RULES.LENGTH) {
      return VERIFIED_CODE.THREE_DIGIT;
    } else if (userInputValue.includes(0)) {
      return VERIFIED_CODE.ZERO_INCLUDED;
    } else if (new Set(userInputValue).size !== NUMBER_RULES.LENGTH) {
      return VERIFIED_CODE.NUMBER_DUPLICATED;
    }
    return VERIFIED_CODE.VERIFIED;
  }

  computeScore(computerInputNumbers, userInputNumbers) {
    computerInputNumbers.split('').forEach((num, idx) => {
      if (num === userInputNumbers[idx]) {
        this.score.strike = this.score.strike + 1;
      } else if (userInputNumbers.indexOf(num) !== -1) {
        this.score.ball = this.score.ball + 1;
      }
    });
  }

  resetScore() {
    this.score.strike = 0;
    this.score.ball = 0;
  }

  showErrorMessage(resultCode) {
    if (resultCode === VERIFIED_CODE.VERIFIED) {
      return;
    }

    alert(RESULT_MESSAGE[resultCode]);
  }

  resetInputValue() {
    this.$userInput.value = '';
    this.$userInput.focus();
  }

  onSubmit() {
    this.$submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      const resultCode = this.verifyInputNumber(this.$userInput.value);
      if (resultCode !== VERIFIED_CODE.VERIFIED) {
        this.showErrorMessage(resultCode);
        this.resetInputValue();
      } else {
        this.play(this.computerNumbers, this.$userInput.value);
      }
    });
  }
}