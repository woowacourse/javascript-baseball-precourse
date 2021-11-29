import {
  isNumber,
  isNotDuplicateExist,
  isLengthThree,
} from "./util/validator.js";
import { $ } from "./util/selector.js";

export default class BaseballGame {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  play(computerInputNumbers, userInputNumbers) {
    if (
      isLengthThree(userInputNumbers) &&
      isNumber(userInputNumbers) &&
      isNotDuplicateExist(userInputNumbers)
    ) {
      return "결과 값 String";
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

  handleSubmit(event) {
    event.preventDefault();
    this.play(123, this.getUserInput());
  }

  init() {
    const $form = $("form");
    $form.addEventListener("submit", this.handleSubmit);
  }
}

const baseBallGame = new BaseballGame();
baseBallGame.init();
// 테스트용 콘솔 로그
// console.log(baseBallGame.play(123, 456), "통과");
// console.log(baseBallGame.play(123, "---"), "숫자아님-실패");
// console.log(baseBallGame.play(123, 111), "중복있음-실패");
// console.log(baseBallGame.play(123, 12), "길이3아님-실패");
