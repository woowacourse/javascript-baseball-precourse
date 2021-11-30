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
    this.$result.innerHTML = this.play(
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
    this.computer.makeVisible("$result");
    this.computerInputNumbers = this.computer.generateRandomNumbers();
  }
  play(computerInputNumbers, userInputNumbers) {
    if (!this.user.isInputValid(userInputNumbers)) {
      return;
    }
    if (computerInputNumbers === userInputNumbers) {
      this.computer.makeVisible("$correctResult");
      return;
    }

    const ball = this.computer.calcBall(computerInputNumbers, userInputNumbers);
    const strike = this.computer.calcStrike(
      computerInputNumbers,
      userInputNumbers
    );
    if (ball || strike) {
      return `${ball} ${strike}`;
    }
    return "낫싱";
  }
}

const game = new BaseballGame();
game.init();
