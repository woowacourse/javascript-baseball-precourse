import { isNumber } from "./util/validator.js";

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    if (isNumber(userInputNumbers)) {
      return "결과 값 String";
    }
    alert("숫자를 입력하세요");
  }
}

const baseBallGame = new BaseballGame();
