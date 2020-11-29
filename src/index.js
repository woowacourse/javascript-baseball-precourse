import { text } from './fixtrue';
import { isNumber, isNot3Digit, isInZero, isInDuplicateDigit } from './utils';

// BaseballGame class
export default class BaseballGame {
  constructor() {
    this._computerInputNumbers = null;
    this.init();
  }

  init() {
    this.RandomComputerInputNumbers();
  }

  RandomComputerInputNumbers() {
    const minVal = 1;
    const maxVal = 9;
    let table;
    let random = '';
    let count = 0;

    table = Array.from({ length: 10 }).map(() => false);

    while (count < 3) {
      let number = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
      if (table[number] === false) {
        table[number] = true;
        random += number;
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

    return [strike, ball];
  }

  play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = this.judge(computerInputNumbers, userInputNumbers);
    let responseString = '';

    if (ball) {
      responseString += `${ball}${text.ball}`;
    }

    if (strike) {
      responseString += ` ${strike}${text.strike}`;
    }

    if (ball === 0 && strike === 0) {
      responseString = text.nothing;
    }

    if (strike === 3) {
      responseString = text.correct;
    }

    return responseString;
  }

  restart() {
    this.init();
  }
}

export class BaseballGameView {
  constructor(baseballGameModel, resultDiv) {
    this.baseballGameModel = baseballGameModel;
    this._resultDiv = resultDiv;
  }

  renderResult(userInputNumbers) {
    const resultString = this.baseballGameModel.play(
      this.baseballGameModel.getComputerInputNumbers(),
      userInputNumbers,
    );

    const responseP = document.createElement('p');
    responseP.innerHTML = resultString;

    if (resultString === text.correct) {
      const strong = document.createElement('strong');
      strong.appendChild(responseP);
      this._resultDiv.appendChild(strong);

      const restartDiv = document.createElement('div');
      restartDiv.id = 'restart';

      const restartP = document.createElement('p');
      restartP.innerHTML = text.askRestart;
      restartDiv.appendChild(restartP);

      const restartButton = document.createElement('button');
      restartButton.innerHTML = text.restart;
      restartButton.id = 'game-restart-button';
      restartButton.addEventListener('click', handleReStartClick);
      restartDiv.appendChild(restartButton);

      this._resultDiv.appendChild(restartDiv);
    } else {
      this._resultDiv.appendChild(responseP);
    }
  }

  cleanResult() {
    while (this._resultDiv.hasChildNodes()) {
      this._resultDiv.removeChild(this._resultDiv.firstChild);
    }
  }
}

// user input judge function and reset input function

function resetInputNumbers() {
  const userInput = document.getElementById('user-input');
  userInput.value = '';
}

// event handler functions

function handleReStartClick() {
  resetInputNumbers();
  gameView.cleanResult();
  gameModel.restart();
}

function handleUserInputSubmit() {
  const userInputNumbers = document.getElementById('user-input').value;

  if (!isNumber(userInputNumbers)) {
    resetInputNumbers();
    return alert(text.warningForNotNum);
  }

  if (isNot3Digit(userInputNumbers)) {
    resetInputNumbers();
    return alert(text.warningFor3Digit);
  }

  if (isInZero(userInputNumbers)) {
    resetInputNumbers();
    return alert(text.warningForZero);
  }

  if (isInDuplicateDigit(userInputNumbers)) {
    resetInputNumbers();
    return alert(text.warningForduplicate);
  }

  gameView.cleanResult();
  gameView.renderResult(userInputNumbers);
}

const gameModel = new BaseballGame();
const resultDiv = document.getElementById('result');
const gameView = new BaseballGameView(gameModel, resultDiv);
const submitNumButton = document.getElementById('submit');
submitNumButton.addEventListener('click', handleUserInputSubmit);
