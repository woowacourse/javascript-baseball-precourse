import { $ } from "./utils/index.js";
import Computer from "./computer/computer.js";
import User from "./user/user.js";

export default class BaseballGame {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.$restartButton = $("#game-restart-button");
    this.$userInput = $("#user-input");
    this.$submit = $("#submit");
    this.$result = $("#result");
    this.$correctResult = $("#correct-result");
    this.computerInputNumbers = this.computer.generateRandomNumbers();
  }
  init() {
    this.triggerRestartEvent();
    this.triggerSubmitEvent();
  }
  triggerSubmitEvent() {
    this.$submit.addEventListener("click", (e) => this.onAnswerSubmit(e));
  }
  onAnswerSubmit(e) {
    e.preventDefault();
    $result.innerHTML = this.play(
      this.computerInputNumbers,
      this.$userInput.value
    );
  }
  triggerRestartEvent() {
    this.$restartButton.addEventListener("click", (e) => this.onRestart(e));
  }
  onRestart(e) {
    e.preventDefault();
    this.$userInput.value = "";
    this.makeVisible("$result");
    this.computerInputNumbers = this.computer.generateRandomNumbers();
  }
  play(computerInputNumbers, userInputNumbers) {
    if (!this.user.isInputValid(userInputNumbers)) {
      return;
    }
    if (computerInputNumbers === userInputNumbers) {
      this.makeVisible("$correctResult");
      return;
    }

    const ball = this.calcBall(computerInputNumbers, userInputNumbers);
    const strike = this.calcStrike(computerInputNumbers, userInputNumbers);
    if (ball || strike) {
      return `${ball} ${strike}`;
    }
    return "낫싱";
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
  // 독립적인 기능으로 생각되는데, 어떻게 빼면 좋을까?
  makeVisible($) {
    if ($ === "$result") {
      $result.innerText = "";
      $result.style.display = "block";
      $correctResult.style.display = "none";
      return;
    }
    if ($ === "$correctResult") {
      $result.style.display = "none";
      $correctResult.style.display = "block";
    }
  }
}

const game = new BaseballGame();
game.init();
