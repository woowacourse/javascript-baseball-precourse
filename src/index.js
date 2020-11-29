import { text } from './fixtrue';
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
    const table = Array.from({ length: 10 }).map(() => false);
    let random = '';
    let count = 0;

    while (count < 3) {
      let number = Math.floor(
        Math.random() * (this.MAXVAL - this.MINVAL + 1) + this.MINVAL,
      );
      if (table[number] === false) {
        table[number] = true;
        random += number.toString();
        count++;
      }
    }

    this._computerInputNumbers = random;
  }

  getComputerInputNumbers() {
    return this._computerInputNumbers;
  }

  judge(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    [...computerInputNumbers].forEach((digit, index) => {
      if (digit === userInputNumbers[index]) {
        strike++;
      } else if (userInputNumbers.includes(digit)) {
        ball++;
      }
    });

    return { strike, ball };
  }

  play(computerInputNumbers, userInputNumbers) {
    const { strike, ball } = this.judge(computerInputNumbers, userInputNumbers);
    let responseString = '';

    if (ball) {
      responseString += `${ball}${text.BALL}`;
    }

    if (strike) {
      responseString += ` ${strike}${text.STRIKE}`;
    }

    if (ball === 0 && strike === 0) {
      responseString = text.NOTHING;
    }

    if (strike === 3) {
      responseString = text.CORRECT;
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
        .addEventListener('click', handleReStartClick);
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
}

// event handler functions

function handleReStartClick() {
  gameView.resetUserInputNumbers();
  gameView.cleanResult();
  gameModel.restart();
}

function handleUserInputSubmit() {
  const userInputNumbers = document.getElementById('user-input').value;

  if (!isNumber(userInputNumbers)) {
    gameView.resetUserInputNumbers();
    return alert(text.WARNING_FOR_NOT_NUM);
  }

  if (isNot3Digit(userInputNumbers)) {
    gameView.resetUserInputNumbers();
    return alert(text.WARNING_FOR_3DIGIT);
  }

  if (isInZero(userInputNumbers)) {
    gameView.resetUserInputNumbers();
    return alert(text.WARNING_FOR_ZERO);
  }

  if (isInDuplicateDigit(userInputNumbers)) {
    gameView.resetUserInputNumbers();
    return alert(text.WARNING_FOR_DUPLICATE);
  }

  gameView.cleanResult();
  gameView.renderResult(userInputNumbers);
}

// start

const gameModel = new BaseballGame();
const resultDiv = document.getElementById('result');
const userInput = document.getElementById('user-input');
const gameView = new BaseballGameView(gameModel, resultDiv, userInput);
const submitNumButton = document.getElementById('submit');
submitNumButton.addEventListener('click', handleUserInputSubmit);
