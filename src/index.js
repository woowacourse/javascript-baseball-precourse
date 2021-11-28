import {
  isNumber,
  isNotDuplicateExist,
  isLengthThree,
} from "./util/validator.js";
import { $ } from "./util/selector.js";

export default class BaseballGame {
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
}

const baseBallGame = new BaseballGame();

// 테스트용 콘솔 로그
// console.log(baseBallGame.play(123, 456), "통과");
// console.log(baseBallGame.play(123, "---"), "숫자아님-실패");
// console.log(baseBallGame.play(123, 111), "중복있음-실패");
// console.log(baseBallGame.play(123, 12), "길이3아님-실패");
