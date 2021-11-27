import { $ } from "./utils/index.js";
import Computer from "./computer/computer.js";
import User from "./user/user.js";

const $userInput = $("#user-input");
const $submit = $("#submit");
const $result = $("#result");
const $correctResult = $("#correct-result");
const $restartButton = $("#game-restart-button");

export default class BaseballGame {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }
  play(computerInputNumbers, userInputNumbers) {
    if (!this.user.isInputValid(userInputNumbers)) {
      return;
    }
    if (computerInputNumbers === userInputNumbers) {
      this.makeVisible("$correctResult");
      return;
    }
    this.printCountMessage(computerInputNumbers, userInputNumbers);
  }
  printCountMessage(computerInputNumbers, userInputNumbers) {
    const ball = this.calcBall(computerInputNumbers, userInputNumbers);
    const strike = this.calcStrike(computerInputNumbers, userInputNumbers);
    const countMessage =
      `${ball} ${strike}` === " " ? "낫싱" : `${ball} ${strike}`;
    $result.innerHTML = countMessage;
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

let computerInputNumbers = game.computer.generateRandomNumbers();
console.log(`computerInputNumbers`, computerInputNumbers);
$submit.addEventListener("click", onAnswerSubmit);

function onAnswerSubmit(e) {
  e.preventDefault();
  game.play(computerInputNumbers, $userInput.value);
}

$restartButton.addEventListener("click", onRestart);

function onRestart(e) {
  e.preventDefault();
  $userInput.value = "";
  game.makeVisible("$result");
  computerInputNumbers = game.computer.generateRandomNumbers();
}
