const NUMBER_LENGTH = 3;

const $ = (selector) => {
  return document.querySelector(selector);
};

const $userInput = $("#user-input");
const $submit = $("#submit");
const $result = $("#result");

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
  checkAnswer(randomNums, inputNums) {
    if (randomNums === inputNums) {
      $result.innerHTML = `정답입니다.`;
      return;
    }
    const ball = calcBall(randomNums, inputNums);
    const strike = calcStrike(randomNums, inputNums);
    $result.innerHTML = `${ball}볼 ${strike}스트라이크`;
  }
  calcBall(randomNums, inputNums) {}

  calcStrike(randomNums, inputNums) {}
}

const game = new BaseballGame();

const randomNums = game.generateRandomNumbers();
console.log(`randomNums`, randomNums);
$submit.addEventListener("click", (e) => {
  e.preventDefault();
  game.checkAnswer(randomNums, $userInput.value);
});
