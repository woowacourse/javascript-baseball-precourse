import { text } from './constants';
import { isNumber, isNot3Digit, isInZero, isInDuplicateDigit } from './utils';

// BaseballGame class (Model)

export default class BaseballGame {
  constructor() {
    this._computerInputNumbers = null;
    this.MAXVAL = 9;
    this.MINVAL = 1;
    this.init();
  }

  init() {
    this.randomComputerInputNumbers();
  }

  randomComputerInputNumbers() {
    const table = Array.from({ length: 10 }, () => false);
    let random = '';
    let count = 0;

    while (count < 3) {
      let idx = Math.floor(
        Math.random() * (this.MAXVAL - this.MINVAL + 1) + this.MINVAL,
      );
      if (table[idx] === false) {
        table[idx] = true;
        random += idx.toString();
        count++;
      }
    }

    console.log(random);

    this._computerInputNumbers = random;
  }

  getComputerInputNumbers() {
    return this._computerInputNumbers;
  }

  judge(computerInputNumbers, userInputNumbers) {
    return computerInputNumbers.split('').reduce(
      (acc, curVal, curIdx) => {
        if (curVal === userInputNumbers[curIdx]) {
          acc['strike']++;
        } else if (userInputNumbers.includes(curVal)) {
          acc['ball']++;
        }
        return acc;
      },
      { strike: 0, ball: 0 },
    );
  }

  play(computerInputNumbers, userInputNumbers) {
    const { strike, ball } = this.judge(computerInputNumbers, userInputNumbers);
    let responseString = '';

    if (ball === 0 && strike === 0) {
      return text.NOTHING;
    }

    if (strike === 3) {
      return text.CORRECT;
    }

    if (ball) {
      responseString += `${ball}${text.BALL}`;
    }

    if (strike) {
      responseString += ` ${strike}${text.STRIKE}`;
    }

    return responseString;
  }

  restart() {
    this.init();
  }
}

// BaseballGameView class (View)

export class BaseballGameView {
  constructor(baseballGameModel, resultDiv, userInput) {
    this.baseballGameModel = baseballGameModel;
    this._resultDiv = resultDiv;
    this._userInput = userInput;
  }

  renderResult(userInputNumbers) {
    const resultString = this.baseballGameModel.play(
      this.baseballGameModel.getComputerInputNumbers(),
      userInputNumbers,
    );

    if (resultString === text.CORRECT) {
      this._resultDiv.innerHTML = `
        <strong>
          <p>${resultString}</p>
        </strong>
        <div id="restart">
          <p>${text.ASK_RESTART}</p>
          <button id="game-restart-button">${text.RESTART}</button>
        <div/>
      `;

      document
        .getElementById('game-restart-button')
        .addEventListener('click', this.handleReStartClick.bind(this));
    } else {
      this._resultDiv.innerHTML = `
        <p>${resultString}</p>
      `;
    }
  }

  cleanResult() {
    this._resultDiv.innerHTML = '';
  }

  resetUserInputNumbers() {
    this._userInput.value = '';
  }

  validUserInputNumbers(userInputNumbers) {
    if (!isNumber(userInputNumbers)) {
      return text.WARNING_FOR_NOT_NUM;
    }

    if (isNot3Digit(userInputNumbers)) {
      return text.WARNING_FOR_3DIGIT;
    }

    if (isInZero(userInputNumbers)) {
      return text.WARNING_FOR_ZERO;
    }

    if (isInDuplicateDigit(userInputNumbers)) {
      return text.WARNING_FOR_DUPLICATE;
    }

    return '';
  }

  handleReStartClick() {
    this.resetUserInputNumbers();
    this.cleanResult();
    this.baseballGameModel.restart();
  }

  handleUserInputSubmit() {
    const exception = this.validUserInputNumbers(this._userInput.value);
    if (exception) {
      alert(exception);
      return;
    }

    gameView.cleanResult();
    gameView.renderResult(userInputNumbers);
  }
}

// start

const gameModel = new BaseballGame();
const resultDiv = document.getElementById('result');
const userInput = document.getElementById('user-input');
const gameView = new BaseballGameView(gameModel, resultDiv, userInput);
const submitNumButton = document.getElementById('submit');
submitNumButton.addEventListener(
  'click',
  gameView.handleUserInputSubmit.bind(gameView),
);
