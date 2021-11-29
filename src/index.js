import {
  isNumber,
  isNotDuplicateExist,
  isLengthThree,
} from "./util/validator.js";
import { $ } from "./util/selector.js";
import { renderFailMessage } from "./render/renderFailMessage.js";
import { checkResult } from "./util/checkResult.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  init() {
    this.generateComputerInput();
    const $form = $("form");
    $form.addEventListener("submit", this.handleSubmit);
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
    const resultText = this.play(this.computerInput, this.getUserInput());
    renderFailMessage(resultText);
  }

  play(computerInputNumbers, userInputNumbers) {
    if (
      isLengthThree(userInputNumbers) &&
      isNumber(userInputNumbers) &&
      isNotDuplicateExist(userInputNumbers)
    ) {
      const resultText = checkResult(computerInputNumbers, userInputNumbers);
      return resultText;
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
