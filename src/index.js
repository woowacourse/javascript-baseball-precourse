import { $ } from "./utils/index.js";
import { USER_INPUT_ALERT } from "./libs/constant.js";
const NUMBER_LENGTH = 3;

const $userInput = $("#user-input");
const $submit = $("#submit");
const $result = $("#result");

const InputCheckMethods = [
  (value) => {
    if (val == "") {
      alert(USER_INPUT_ALERT.blank);
      return false;
    }
    return true;
  },
  (value) => {
    if (!Number(value)) {
      alert(USER_INPUT_ALERT.notNumber);
      return false;
    }
    return true;
  },
  (value) => {
    if (value.inclues("0")) {
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
  isValid(userInputNumbers) {
    // 중복되는 값이 없는지 검사
    // 1-9가 맞는지 검사
    // 3자리가 맞는지 검사
  }
  play(computerInputNumbers, userInputNumbers) {
    if (!isValid(userInputNumbers)) {
      return;
    }
    if (computerInputNumbers === userInputNumbers) {
      $result.innerHTML = `정답입니다.`;
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
}

const game = new BaseballGame();

const computerInputNumbers = game.generateRandomNumbers();
console.log(`computerInputNumbers`, computerInputNumbers);
$submit.addEventListener("click", onAnswerSubmit);

function onAnswerSubmit(e) {
  e.preventDefault();
  game.play(computerInputNumbers, $userInput.value);
}
