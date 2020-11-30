export default class BaseballGame {
  _validateInput(input) {
    if (typeof input !== "string") {
      return false;
    }
    const inputArr = input.split("");
    const inputSet = new Set(inputArr);

    return inputSet.size === input.length ? true : false;
  }

  play(computerInputStr, userInputStr) {
    const messageObj = {
      message: "",
      finished: false,
      error: false,
    };

    const verdictedErrorObj = this._verdictInputError(computerInputStr, userInputStr);

    if (verdictedErrorObj.error) {
      messageObj.message = verdictedErrorObj.message;
      messageObj.error = verdictedErrorObj.error;
      return messageObj;
    }

    const verdictedObj = this._verdictStrikeOrBall(computerInputStr, userInputStr);

    const resultMessageObj = this._makeResultMessage(verdictedObj);
    messageObj.message = resultMessageObj.message;
    if (resultMessageObj.finished) {
      messageObj.finished = resultMessageObj.finished;
    }

    return messageObj;
  }

  _verdictInputError(computerInputStr, userInputStr) {
    let str = null;
    if (computerInputStr.length !== userInputStr.length) {
      str = `입력 값의 길이가 맞추어야 하는 길이 ${computerInputStr.length}와 같지 않습니다.`;
    } else if (this._validateInput(computerInputStr) === false || this._validateInput(userInputStr) === false) {
      str = "입력 값이 올바르지 않습니다.";
    }
    return str === null ? { message: "", error: false } : { message: str, error: true };
  }

  _verdictStrikeOrBall(computerInputStr, userInputStr) {
    const strikeOrBallObj = {
      ball: 0,
      strike: 0,
      totalLength: computerInputStr.length,
    };

    for (let idx = 0; idx < computerInputStr.length; idx++) {
      const curComputerInput = computerInputStr[idx];
      const curUserInput = userInputStr[idx];
      if (curComputerInput === curUserInput) {
        strikeOrBallObj.strike += 1;
      } else if (computerInputStr.includes(curUserInput)) {
        strikeOrBallObj.ball += 1;
      }
    }
    return strikeOrBallObj;
  }

  _makeResultMessage({ ball, strike, totalLength }) {
    const result = { message: "", finished: false };
    if (strike === totalLength) {
      result.message = "축하합니다. 정답입니다.";
      result.finished = true;
    } else if (ball > 0 && strike === 0) {
      result.message = `${ball}볼`;
    } else if (strike > 0 && ball === 0) {
      result.message = `${strike}스트라이크`;
    } else if (ball > 0 && strike > 0) {
      result.message = `${ball}볼 ${strike}스트라이크`;
    } else {
      result.message = "낫싱";
    }

    return result;
  }
}

class RandomBaseball {
  constructor(length) {
    this.computerNumbers = this._makeDiffNumber(length);
  }

  resetRandomBaseball(length) {
    this.computerNumbers = this._makeDiffNumber(length);
  }

  getBaseball() {
    return this.computerNumbers;
  }

  _makeRandomValue(max, min) {
    // max ~ min 두 값 사이의 값을 출력(max, min값 포함)
    return Math.floor(Math.random() * max) + min;
  }

  _makeDiffNumber(length = 3) {
    const numberSet = new Set();
    while (numberSet.size < length) {
      const randomNumber = this._makeRandomValue(9, 1);
      numberSet.add(randomNumber);
    }
    // set에서 string으로 변환
    let stringNumbers = [...numberSet].join("");
    return stringNumbers;
  }
}

class BaseballEvent {
  constructor({ inputEl, resultEl, appEl, baseball, randomBaseball }) {
    this.inputEl = inputEl;
    this.resultEl = resultEl;
    this.appEl = appEl;
    this.baseball = baseball;
    this.randomBaseball = randomBaseball;

    // event 바인딩 및
    this.appEl.addEventListener("click", e => {
      if (e.target.id === "submit") {
        const userInput = this.inputEl.value;
        this.sendBaseball(userInput);
      } else if (e.target.id === "game-restart-button") {
        this.restartGame();
      }
    });
  }

  _showErrorAlert(str) {
    alert(`숫자 야구 게임 에러 내용\n${str}`);
  }

  _initValueAndFocusIn() {
    this.inputEl.value = "";
    this.inputEl.focus();
  }

  sendBaseball(userInput) {
    const computerInput = this.randomBaseball.getBaseball();
    let { message, finished, error } = this.baseball.play(computerInput, userInput);
    if (error) {
      this._showErrorAlert(message);
      this._initValueAndFocusIn();
    } else {
      this._showResult({ message, finished });
    }
  }

  restartGame() {
    this.randomBaseball.resetRandomBaseball();
    this._showResult({ message: null });
    this._initValueAndFocusIn();
  }

  _showResult({ message, finished }) {
    let template = "";
    if (message) {
      template += `<span>${message}</span>`;
      if (finished) {
        template += `<p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">재시작</button></p>`;
      }
    }
    this.resultEl.innerHTML = template;
  }
}

const baseballGame = new BaseballGame();
const randomBaseball = new RandomBaseball();
const baseballEvent = new BaseballEvent({
  inputEl: document.getElementById("user-input"),
  resultEl: document.getElementById("result"),
  appEl: document.getElementById("app"),
  baseball: baseballGame,
  randomBaseball: randomBaseball,
});
