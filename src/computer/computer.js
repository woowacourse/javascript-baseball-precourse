import { NUMBER_LENGTH } from "../libs/constant.js";
import { $ } from "../utils/index.js";

export default class Computer {
  constructor() {
    this.$result = $("#result");
    this.$correctResult = $("#correct-result");
  }
  generateRandomNumbers() {
    let answer = [];
    while (answer.length < NUMBER_LENGTH) {
      this.addRandomNum(answer);
    }
    return answer.join("");
  }
  addRandomNum(answer) {
    const randomNum = String(MissionUtils.Random.pickNumberInRange(1, 9));
    if (answer.length === 0 || !answer.includes(randomNum)) {
      answer.push(randomNum);
    }
  }
  calcBall(computerInputNumbers, userInputNumbers) {
    let ball = 0;
    for (let i = 0; i < computerInputNumbers.length; i++) {
      // indent를 1로 만드는 법?
      if (
        computerInputNumbers.includes(userInputNumbers[i]) &&
        computerInputNumbers[i] !== userInputNumbers[i]
      ) {
        ball++;
      }
    }
    return ball > 0 ? `${ball}볼` : "";
  }
  calcStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }
    return strike > 0 ? `${strike}스트라이크` : "";
  }
  makeVisible($) {
    if ($ === "$result") {
      this.$result.innerText = "";
      this.$result.style.display = "block";
      this.$correctResult.style.display = "none";
      return;
    }
    if ($ === "$correctResult") {
      this.$result.style.display = "none";
      this.$correctResult.style.display = "block";
    }
  }
}
