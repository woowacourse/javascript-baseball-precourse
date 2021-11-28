import { NUMBER_RULES, RESULT_MESSAGE, VERIFIED_CODE } from './constants.js';
import { generateComputerRandomNumber, showErrorMessage, verifyInputNumber } from './util.js';
export default class BaseballGame {
  constructor() {
    this.$userInput = document.getElementById('user-input');
    this.$submitButton = document.getElementById('submit');
    this.$result = document.getElementById('result');
    this.computerNumbers = generateComputerRandomNumber();
    this.score = { 
      ball: 0, 
      strike: 0,
    };
  }

  init() {
    this.initResultScreen();
    this.submitHandler(this.$submitButton);
  }

  play(computerInputNumbers, userInputNumbers) {
    this.computeScore(computerInputNumbers, userInputNumbers);
    this.setResult();
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

  setResult() {
    if (this.score.strike === NUMBER_RULES.LENGTH) {
      this.printCorrectResultScreen(this.$result);
    } else {
      this.printNotCorrectResultScreen(this.$result, this.score);
    }
    this.resetScore();
  }

  resetInputValue() {
    this.$userInput.value = '';
    this.$userInput.focus();
  }

  initResultScreen() {
    this.$result.innerHTML = ``;
  }

  printCorrectResultScreen($result) {
    this.initResultScreen();
    
    const correctText = `
      <p><strong>🎉정답을 맞추셨습니다!🎉</strong></p>
      <span>게임을 새로 시작하시겠습니까?</span>
    `;
    this.$result.innerHTML = correctText;

    const restartButton = document.createElement('button');
    restartButton.id = 'game-restart-button';
    restartButton.innerText = '게임 재시작';
    this.restartHandler(restartButton);
    $result.appendChild(restartButton);
  }

  printNotCorrectResultScreen($result, gameScore) {
    this.initResultScreen();
    
    let resultText = '';
    if (gameScore.strike === 0 && gameScore.ball === 0) {
      resultText = RESULT_MESSAGE.NOTHING;
    } else if (gameScore.strike > 0 && gameScore.ball > 0) {
      resultText = `${gameScore.ball}${RESULT_MESSAGE.BALL} ${gameScore.strike}${RESULT_MESSAGE.STRIKE}`;
    } else if (gameScore.strike > 0) {
      resultText = `${gameScore.strike}${RESULT_MESSAGE.STRIKE}`;
    } else if (gameScore.ball > 0) {
      resultText = `${gameScore.ball}${RESULT_MESSAGE.BALL}`;
    }
    $result.innerText = resultText;
  }

  submitHandler($element) {
    $element.addEventListener('click', (e) => {
      e.preventDefault();
      
      const resultCode = verifyInputNumber(this.$userInput.value);
      if (resultCode !== VERIFIED_CODE.VERIFIED) {
        showErrorMessage(resultCode);
        this.resetInputValue();
      } else {
        this.play(this.computerNumbers, this.$userInput.value);
      }
    });
  }

  restartHandler($element) {
    $element.addEventListener('click', (e) => {
      e.preventDefault();
      
      this.resetScore();
      this.resetInputValue();
      this.initResultScreen();
      this.computerNumbers = generateComputerRandomNumber();
    });
  }
}

const baseballGame = new BaseballGame();
baseballGame.init();