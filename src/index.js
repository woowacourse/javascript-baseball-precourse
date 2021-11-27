import { getComputerInput, isValidate } from "./lib/utils.js";
import { BALL, FINISH, NOTHING, PLAIN_TEXT, STRIKE } from "./lib/constants.js";
class BaseballGameLogic {
  static getKey(com, char, position) {
    const idx = com.indexOf(char);

    if (idx === -1) {
      return NOTHING;
    }

    if (idx === position) {
      return STRIKE;
    }

    if (idx !== position) {
      return BALL;
    }
  }

  static convertResultToString(result) {
    if (result[STRIKE] === 3) {
      return FINISH;
    }
    if (result[STRIKE] === 0 && result[BALL] === 0) {
      return NOTHING;
    }

    let template = PLAIN_TEXT;

    template += `${
      result[STRIKE] === 0 ? PLAIN_TEXT : `${result[STRIKE]} ${STRIKE}`
    }`;

    template += `${
      result[BALL] === 0 ? PLAIN_TEXT : `${result[BALL]} ${BALL}`
    }`;

    return template;
  }
  static getResult(com, user) {
    const result = {
      [`${STRIKE}`]: 0,
      [`${BALL}`]: 0,
      [`${NOTHING}`]: 0,
    };
    for (let i = 0; i < com.length; i++) {
      const KEY = BaseballGameLogic.getKey(com, user[i], i);
      result[KEY]++;
    }
    return BaseballGameLogic.convertResultToString(result);
  }
}
export default class BaseballGame extends BaseballGameLogic {
  constructor() {
    super();

    this.computer = getComputerInput().toString();

    this.init();
  }
  init() {
    this.initDOM();

    this.initHandler();

    this.restart.addEventListener("click", this.onRestart);

    this.form.addEventListener("submit", this.onSubmit);
  }
  initDOM() {
    this.form = document.querySelector("form");

    this.input = document.querySelector("form input");

    this.result = document.querySelector("#result");

    this.restart = document.createElement("button");

    this.restart.setAttribute("id", "game-restart-button");

    this.restart.textContent = "재시작";
  }
  initHandler() {
    this.onRestart = () => {
      this.clearGame();

      new BaseballGame();
    };

    this.onSubmit = (e) => {
      e.preventDefault();

      const template = this.play(this.computer, this.input.value);

      result.innerHTML = template;

      if (template === FINISH) result.appendChild(this.restart);
    };
  }
  play(computerInputNumbers, userInputNumbers) {
    if (isValidate(userInputNumbers)) {
      return BaseballGameLogic.getResult(
        computerInputNumbers,
        userInputNumbers
      );
    }
    alert("1~9 까지의 수를 중복없이 3개 입력해주세요.");
    return PLAIN_TEXT;
  }

  clearGame() {
    this.input.value = PLAIN_TEXT;

    this.result.innerHTML = PLAIN_TEXT;

    this.form.removeEventListener("submit", this.onSubmit);

    this.restart.removeEventListener("click", this.onRestart);
  }
}

new BaseballGame();
