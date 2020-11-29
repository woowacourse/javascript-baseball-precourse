export default class BaseballGame {
  _showErrorAlert(str) {
    alert(`숫자 야구 게임 에러 내용\n ${str}`);
  }

  _validateInput(input) {
    if (typeof input !== "string") {
      return false;
    }
    const inputArr = input.split("");
    const inputSet = new Set(inputArr);

    return inputSet.size === input.length ? true : false;
  }

  play(computerInputNumbers, userInputNumbers) {
    if (typeof computerInputNumbers !== "number" || typeof userInputNumbers !== "number") {
      throw new Error("Unhandled Type Error");
    }

    const computerInputStr = "" + computerInputNumbers;
    const userInputStr = "" + userInputNumbers;

    if (computerInputStr.length !== userInputStr.length) {
      const str = `입력 값의 길이가 맞추어야 하는 길이 ${computerInputStr.length}와 같지 않습니다.`;
      this._showErrorAlert(str);
    } else if (this._validateInput(computerInputStr) === false || this._validateInput(userInputStr) === false) {
      this._showErrorAlert("입력 값이 올바르지 않습니다.");
    }

    const verdictedObj = this._verdictStrikeOrBall(computerInputStr, userInputStr);

    const { message, finished } = this._makeResultMessage(verdictedObj);

    return message;
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
    return parseInt(stringNumbers);
  }
}

const baseballGame = new BaseballGame();
const randomBaseball = new RandomBaseball();
window.baseballGame = baseballGame;
window.randomBaseball = randomBaseball;
