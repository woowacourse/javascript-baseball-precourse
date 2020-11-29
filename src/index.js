import { NUMBER_LIST, START_INDEX_ZERO, NUMBER_DIGIT, STRIKE_INDEX, BALL_INDEX, ERROR_STRING, ANSWER_STRING, NOTHING_STRING} from "./constants.js";

export default class BaseballGame {

  constructor() {
    const computerInputNumbers = this.getRandomNumberList();
    
    this.clickSubmitButton(computerInputNumbers);
  };

  clickSubmitButton(computerInputNumbers) {
    const submitButton = document.querySelector("#submit");

    submitButton.addEventListener("click", () => {
      this.startGame(computerInputNumbers);
    }, false);
  };

  startGame(computerInputNumbers) {
    const userInputNumbers = this.getUserInputNumberList();

    this.printResult(computerInputNumbers, userInputNumbers);
    this.restartGame();
  };

  restartGame() {
    const restartElement = document.querySelector("#game-restart-button");
    if (restartElement !== null) {
      restartElement.addEventListener("click", location.reload.bind(location));
    }
  };

  printResult(computerInputNumbers, userInputNumbers) {
    if (userInputNumbers !== undefined) {
      const resultElement = document.querySelector("#result");
      resultElement.innerHTML = this.play(computerInputNumbers, userInputNumbers);
    }
  };

  getRandomNumberList() {
    let tmpNumbers = NUMBER_LIST;
    
    tmpNumbers.sort(function() {
      return Math.random() - Math.random();
    });
    return tmpNumbers.slice(START_INDEX_ZERO, NUMBER_DIGIT);
  };

  getUserInputNumberList() {
    const userInputList = document.querySelector('#user-input').value.split('');
    let userInputNumbers = [];

    if (this.isNotValid(userInputList)) {
      alert(ERROR_STRING);
    } else {
      userInputNumbers = userInputList.map(x => Number(x));
      return userInputNumbers;
    }
  };

  isNotValid(userInputList) {
    return !(this.isNumber(userInputList) && this.isThreeDigit(userInputList) && this.isNotDuplicated(userInputList));
  };

  isNumber(userInputList) {
    let i;
    for (i = 0; i < userInputList.length; i++) {
      if (!('1' <= userInputList[i] && userInputList[i] <= '9')) {
        return false;
      }
    }
    return true;
  };

  isThreeDigit(userInputList) {
    return userInputList.length === NUMBER_DIGIT;
  };

  isNotDuplicated(userInputList) {
    const checkingSet = new Set(userInputList);

    return userInputList.length === checkingSet.size;
  };

  play(computerInputNumbers, userInputNumbers) {
    let resultString = '';
    let ballStrikeList = [0, 0];

    //
    console.log(computerInputNumbers);
    console.log(userInputNumbers);

    let i;
    for (i = 0; i < userInputNumbers.length; i++) {
      if (userInputNumbers[i] === computerInputNumbers[i]) {
        ballStrikeList[STRIKE_INDEX] += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ballStrikeList[BALL_INDEX] += 1;
      }
    }

    if (ballStrikeList[BALL_INDEX] === 0) {
      if (ballStrikeList[STRIKE_INDEX] === 0) {
        resultString = NOTHING_STRING;
      } else if (ballStrikeList[STRIKE_INDEX] === 3) {
        resultString = ANSWER_STRING;
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
  };
}

new BaseballGame();