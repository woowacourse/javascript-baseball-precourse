import { text } from './fixtrue';

// BaseballGame class
export default class BaseballGame {
  constructor(resultDiv) {
    this._computerInputNumbers = null;
    this._resultDiv = resultDiv;
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

export default class BaseballGameView {
  constructor(BaseballGame) {}

  renderResult(string) {
    const responseP = doc.createElement('p');
    responseP.innerHTML = string;

    if (string === text.correct) {
      const strong = doc.createElement('strong');
      strong.appendChild(responseP);
      this._resultDiv.appendChild(strong);

      const restartDiv = doc.createElement('div');
      restartDiv.id = 'restart';

      const restartP = doc.createElement('p');
      restartP.innerHTML = text.askRestart;
      restartDiv.appendChild(restartP);

      const restartButton = doc.createElement('button');
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

function isNumber(userInputNumbers) {
  const regex = /^[0-9]*$/;
  const response = regex.test(userInputNumbers);

  return response;
}

function isNot3Digit(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return true;
  }
}

function isInZero(userInputNumbers) {
  if (userInputNumbers.includes('0')) {
    return true;
  }
}

function isInDuplicateDigit(userInputNumbers) {
  const deduplicateCount = Array.from(new Set(userInputNumbers)).length;
  if (deduplicateCount !== 3) {
    return true;
  }
}

function resetInputNumbers() {
  const userInput = doc.getElementById('user-input');
  userInput.value = '';
}

// event handler functions

function handleReStartClick() {
  resetInputNumbers();
  gameView.cleanResult();
  gameView.restart();
}

function handleUserInputSubmit() {
  const userInputNumbers = doc.getElementById('user-input').value;

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
  gameView.renderResult(
    gameModel.play(gameModel.getComputerInputNumbers(), userInputNumbers),
  );
}

const doc = window.document;
const resultDiv = doc.getElementById('result');
const gameModel = new BaseballGame(resultDiv);
const gameView = new BaseballGameView(gameModel);
const submitNumButton = doc.getElementById('submit');
submitNumButton.addEventListener('click', handleUserInputSubmit);
