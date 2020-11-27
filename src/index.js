import { text } from './fixtrue';

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
      if (table[number]) {
        continue;
      } else {
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

// event handler functions

function handleReStartClick() {
  cleanResult();
  resetInputNumbers();
  game.restart();
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

  cleanResult();
  renderResult(game.play(game.getComputerInputNumbers(), userInputNumbers));
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

// DOM Manipulation function

function cleanResult() {
  const resultDiv = doc.getElementById('result');

  while (resultDiv.hasChildNodes()) {
    resultDiv.removeChild(resultDiv.firstChild);
  }
}

function renderResult(string) {
  const resultDiv = doc.getElementById('result');

  const responseP = doc.createElement('p');
  responseP.innerHTML = string;

  if (string === text.correct) {
    const strong = doc.createElement('strong');
    strong.appendChild(responseP);
    resultDiv.appendChild(strong);

    const restartDiv = doc.createElement('div');
    restartDiv.id = 'restart';

    let restartP = doc.createElement('p');
    restartP.innerHTML = text.askRestart;
    restartDiv.appendChild(restartP);

    const restartButton = doc.createElement('button');
    restartButton.innerHTML = text.restart;
    restartButton.id = 'game-restart-button';
    restartButton.addEventListener('click', handleReStartClick);
    restartDiv.appendChild(restartButton);

    resultDiv.appendChild(restartDiv);
  } else {
    resultDiv.appendChild(responseP);
  }
}
const doc = window.document;
const game = new BaseballGame();
const submitNumButton = doc.getElementById('submit');
submitNumButton.addEventListener('click', handleUserInputSubmit);
