import {
  numArrToNum,
  pickUniqueNumbersInRange,
  numToNumArr
} from "./utils.js";
import {
  ANSWER_LENGTH,
  ELEMENT_IDS,
  GAME_CLEAR_VIEW_HTML,
  HINTS
} from "./constants.js";
import Validator from "./validator.js";

export default class BaseballGame {
  constructor() {
    const { USER_INPUT, SUBMIT, RESULT } = ELEMENT_IDS;
    this.computerInputNumbers = this.generateComputerInputNumbers();
    this.$userInput = document.querySelector(`#${USER_INPUT}`);
    this.$submitBtn = document.querySelector(`#${SUBMIT}`);
    this.$result = document.querySelector(`#${RESULT}`);
    this.registerSubmitEventListener();
  }

  registerSubmitEventListener() {
    this.$submitBtn.addEventListener('click', () => this.handleSubmit());
  }

  registerRestartEventListener() {
    document.querySelector(`#${ELEMENT_IDS.RESTART}`).addEventListener('click', () => this.restart());
  }

  handleSubmit() {
    const userInputString = this.$userInput.value;
    const { result, message } = Validator.isValid(userInputString);
    if (!result) {
      alert(message);
      return;
    }
    const hint = this.play(this.computerInputNumbers, parseInt(userInputString, 10));
    if (hint === undefined) this.gameClear();
    else this.printHint(hint);
  }

  gameClear() {
    this.disableuUserInput();
    this.printGameClearView();
    this.registerRestartEventListener();
  }

  restart() {
    this.computerInputNumbers = this.generateComputerInputNumbers();
    this.$result.innerHTML = '';
    this.$userInput.value = '';
  }

  printGameClearView() {
    this.$result.innerHTML = GAME_CLEAR_VIEW_HTML;
  }

  printHint(hint) {
    this.$result.innerHTML = hint;
  }

  disableuUserInput() {
    this.$userInput.disabled = true;
    this.$submitBtn.disabled = true;
  }

  generateComputerInputNumbers() {
    return numArrToNum(pickUniqueNumbersInRange(1, 9, ANSWER_LENGTH));
  }

  countStrikes(computerNumArr, userNumArr) {
    return (userNumArr.filter((n, i) => computerNumArr[i] === n)).length;
  }

  countBalls(computerNumArr, userNumArr) {
    return (userNumArr.filter((n, i) => {
      return computerNumArr.some((cn, j) => ((i !== j) && (n === cn)) ? true : false );
    })).length;
  }

  getHint(strikes, balls) {
    const { NOTHING, BALL, STRIKE } = HINTS;
    let hint = NOTHING;
    if (balls > 0 && strikes > 0) hint = `${balls}${BALL} ${strikes}${STRIKE}`;
    else if (balls > 0) hint = `${balls}${BALL}`;
    else if (strikes > 0) hint = `${strikes}${STRIKE}`;
    return hint;
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) return;
    const [computerNumArr, userNumArr] = [numToNumArr(computerInputNumbers), numToNumArr(userInputNumbers)];
    const strikes = this.countStrikes(computerNumArr, userNumArr);
    const balls = this.countBalls(computerNumArr, userNumArr);
    const hint = this.getHint(strikes, balls);
    return hint;
  }
}

new BaseballGame();