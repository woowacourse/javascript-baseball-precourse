import {
  isNumber,
  isNotDuplicateExist,
  isLengthThree,
} from "./util/validator.js";
import { $ } from "./util/selector.js";
import { renderResult, renderInit } from "./util/render.js";
import { checkResult } from "./util/checkResult.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.init = this.init.bind(this);
  }
  init() {
    this.generateComputerInput();
    const $form = $("form");
    $form.addEventListener("submit", this.handleSubmit);
    console.log(this.computerInput);
  }

  generateComputerInput() {
    let randomNum = MissionUtils.Random.pickNumberInRange(1, 9).toString();
    while (randomNum.length !== 3) {
      const newRandomNum = MissionUtils.Random.pickNumberInRange(
        1,
        9
      ).toString();
      if (isNotDuplicateExist(randomNum + newRandomNum))
        randomNum += newRandomNum;
    }
    this.computerInput = randomNum;
  }

  handleSubmit(event) {
    event.preventDefault();
    const playResult = this.play(this.computerInput, this.getUserInput());
    renderResult(playResult);
    const $restartButton = $("#game-restart-button");
    $restartButton.addEventListener("click", this.restartGame);
  }

  play(computerInputNumbers, userInputNumbers) {
    if (
      isLengthThree(userInputNumbers) &&
      isNumber(userInputNumbers) &&
      isNotDuplicateExist(userInputNumbers)
    ) {
      const result = checkResult(computerInputNumbers, userInputNumbers);
      return result;
    }
    alert("입력값을 다시 확인해주세요");
    this.resetInput();
  }

  resetInput() {
    const $input = $("#user-input");
    $input.value = "";
  }

  getUserInput() {
    const $input = $("#user-input");
    return $input.value;
  }

  restartGame() {
    renderInit();
    this.init();
    this.resetInput();
  }
}

const baseBallGame = new BaseballGame();
baseBallGame.init();

// 테스트용 콘솔 로그
// console.log(checkResult("123", "123"), "3스트라이크");
// console.log(checkResult("123", "345"), "1볼");
// console.log(checkResult("123", "456"), "낫싱");
// console.log(checkResult("123", "134"), "1볼 1스트라이크");
// console.log(checkResult("987", "879"), "3볼");
// console.log(checkResult("917", "279"), "2볼");
// console.log(checkResult("234", "239"), "2스트라이크");
// console.log(baseBallGame.play(123, 456), "통과");
// console.log(baseBallGame.play(123, "---"), "숫자아님-실패");
// console.log(baseBallGame.play(123, 111), "중복있음-실패");
// console.log(baseBallGame.play(123, 12), "길이3아님-실패");
