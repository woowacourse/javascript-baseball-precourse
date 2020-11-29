export class BaseballGame {
  constructor() {
    this.answer = this.setAnswer();
  }

  setAnswer() {
    const arr = [];
    let ranNum = Math.floor(Math.random() * 10);

    for (let i = 0; i < 3; i += 1) {
      while (arr.includes(ranNum) === true) {
        ranNum = Math.floor(Math.random() * 10);
      }
      arr.push(ranNum);
    }

    return arr;
  }

  play(userInput) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (this.answer[i] === Number(userInput[i])) {
        strike += 1;
      } else if (this.answer.includes(Number(userInput[i])) === true) {
        ball += 1;
      }
    }

    return {
      ball,
      strike
    };
  }
}

export class Validation {
  isNumber(inputArray) {
    for (let i = 0; i < inputArray.length; i += 1) {
      if (isNaN(Number(inputArray[i])) === true) {
        return false;
      }
    }

    return true;
  }

  isThreeDigit(inputArray) {
    if (inputArray.length !== 3) {
      return false;
    }

    return true;
  }

  hasDuplicatedNumber(inputArray) {
    const copyGetInput = inputArray.slice();
    copyGetInput.sort((a, b) => a - b);
    for (let i = 0; i < copyGetInput.length - 1; i += 1) {
      if (copyGetInput[i] === copyGetInput[i + 1]) {
        return false;
      }
    }

    return true;
  }
}
