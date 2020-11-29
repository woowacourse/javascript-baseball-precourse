import {
  NUMBER_LIST,
  START_INDEX_ZERO,
  NUMBER_DIGIT,
  STRIKE_INDEX,
  BALL_INDEX,
  ERROR_MESSAGE,
  ANSWER_MESSAGE,
  NOTHING_MESSAGE,
} from "./constants.js";

export default class BaseballGame {
  constructor() {
    const computerInputNumbers = this.getRandomNumberList();

    this.clickSubmitButton(computerInputNumbers);
  }

  clickSubmitButton(computerInputNumbers) {
    const _submitButton = document.querySelector("#submit");

    _submitButton.addEventListener(
      "click",
      () => {
        this.startGame(computerInputNumbers);
      },
      false
    );
  }

  startGame(computerInputNumbers) {
    const userInputNumbers = this.getUserInputNumberList();

    this.printResult(computerInputNumbers, userInputNumbers);
    this.restartGame();
  }

  restartGame() {
    const _restartElement = document.querySelector("#game-restart-button");

    if (_restartElement !== null) {
      _restartElement.addEventListener("click", location.reload.bind(location));
    }
  }

  printResult(computerInputNumbers, userInputNumbers) {
    if (userInputNumbers !== undefined) {
      const _resultElement = document.querySelector("#result");

      _resultElement.innerHTML = this.play(
        computerInputNumbers,
        userInputNumbers
      );
    }
  }

  getRandomNumberList() {
    let _tmpNumbers = NUMBER_LIST;

    _tmpNumbers.sort(() => Math.random() - Math.random());

    return _tmpNumbers.slice(START_INDEX_ZERO, NUMBER_DIGIT);
  }

  getUserInputNumberList() {
    const userInputList = document.querySelector("#user-input").value.split("");
    let userInputNumbers = [];

    if (this.isNotValid(userInputList)) {
      alert(ERROR_MESSAGE);
    } else {
      userInputNumbers = userInputList.map((x) => Number(x));

      return userInputNumbers;
    }
  }

  isNotValid(userInputList) {
    return !(
      this.isNumber(userInputList) &&
      this.isThreeDigit(userInputList) &&
      this.isNotDuplicated(userInputList)
    );
  }

  isNumber(userInputList) {
    let i;

    i = 0;
    for (; i < userInputList.length; i++) {
      if (!("1" <= userInputList[i] && userInputList[i] <= "9")) {
        return false;
      }
    }

    return true;
  }

  isThreeDigit(userInputList) {
    return userInputList.length === NUMBER_DIGIT;
  }

  isNotDuplicated(userInputList) {
    const _privateCustomCheckingSet = new Set(userInputList);

    return userInputList.length === _privateCustomCheckingSet.size;
  }

  play(computerInputNumbers, userInputNumbers) {
    let resultString = "";
    let ballStrikeList = [0, 0];
    let i;

    i = 0;
    for (; i < userInputNumbers.length; i++) {
      if (userInputNumbers[i] === computerInputNumbers[i]) {
        ballStrikeList[STRIKE_INDEX] += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ballStrikeList[BALL_INDEX] += 1;
      }
    }

    if (ballStrikeList[BALL_INDEX] === 0) {
      if (ballStrikeList[STRIKE_INDEX] === 0) {
        resultString = NOTHING_MESSAGE;
      } else if (ballStrikeList[STRIKE_INDEX] === 3) {
        resultString = ANSWER_MESSAGE;
      } else {
        resultString = `${ballStrikeList[STRIKE_INDEX]}스트라이크`;
      }
    } else {
      resultString = `${ballStrikeList[BALL_INDEX]}볼`;
      if (ballStrikeList[STRIKE_INDEX] !== 0) {
        resultString += ` ${ballStrikeList[STRIKE_INDEX]}스트라이크`;
      }
    }

    return resultString;
  }
}

new BaseballGame();
