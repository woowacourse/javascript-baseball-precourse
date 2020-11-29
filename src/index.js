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
    const computerNumbers = computerInputNumbers || this.computerNumbers;
    if (computerInputNumbers) return "결과 값 String";
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
