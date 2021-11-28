import { isNumber, isNotDuplicateExist } from "./util/validator.js";

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    if (isNumber(userInputNumbers) && isNotDuplicateExist(userInputNumbers)) {
      return "결과 값 String";
    }
    alert("입력값을 다시 확인해주세요");
  }
}

const baseBallGame = new BaseballGame();

// 테스트용 콘솔 로그
// console.log(baseBallGame.play(123, 456), "통과");
// console.log(baseBallGame.play(123, "--"), "숫자아님-실패");
// console.log(baseBallGame.play(123, 123451), "중복있음-실패");
