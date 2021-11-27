import { $ } from "./utils/index.js";
import { USER_INPUT_ALERT } from "./libs/constant.js";
const NUMBER_LENGTH = 3;

const $userInput = $("#user-input");
const $submit = $("#submit");
const $result = $("#result");
const $correctResult = $("#correct-result");
const $restartButton = $("#game-restart-button");

const InputCheckMethods = [
  (value) => {
    if (value == "") {
      alert(USER_INPUT_ALERT.blank);
      return false;
    }
    return true;
  },
  (value) => {
    if (!Number(value) && Number(value) !== 0) {
      alert(USER_INPUT_ALERT.notNumber);
      return false;
    }
    return true;
  },
  (value) => {
    if (value.includes("0")) {
      alert(USER_INPUT_ALERT.removeZero);
      return false;
    }
    return true;
  },
  (value) => {
    if (new Set(value).size < NUMBER_LENGTH) {
      alert(USER_INPUT_ALERT.overlap);
      return false;
    }
    return true;
  },
];

export default class BaseballGame {
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
  isInputValid(userInputNumbers) {
    return InputCheckMethods.every((InputCheckMethod) =>
      InputCheckMethod(userInputNumbers)
    );
  }
  makeVisible($) {
    if ($ === "$result") {
      $result.style.display = "block";
      $correctResult.style.display = "none";
      return;
    }
    if ($ === "$correctResult") {
      $result.style.display = "none";
      $correctResult.style.display = "block";
    }
  }
  play(computerInputNumbers, userInputNumbers) {
    if (!this.isInputValid(userInputNumbers)) {
      return;
    }
    if (computerInputNumbers === userInputNumbers) {
      this.makeVisible("$correctResult");
      return;
    }
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
}

const game = new BaseballGame();

let computerInputNumbers = game.generateRandomNumbers();
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
  computerInputNumbers = game.generateRandomNumbers();
}
