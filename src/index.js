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
    const ball = this.calcBall(randomNums, inputNums);
    const strike = this.calcStrike(randomNums, inputNums);
    const countMessage =
      `${ball} ${strike}` === " " ? "낫싱" : `${ball} ${strike}`;
    $result.innerHTML = countMessage;
  }
  calcBall(randomNums, inputNums) {
    let ball = 0;
    for (let i = 0; i < randomNums.length; i++) {
      // indent를 1로 만드는 법?
      if (randomNums.includes(inputNums[i]) && randomNums[i] !== inputNums[i]) {
        ball++;
      }
    }
    return ball > 0 ? `${ball}볼` : "";
  }

  calcStrike(randomNums, inputNums) {
    let strike = 0;
    for (let i = 0; i < randomNums.length; i++) {
      if (randomNums[i] === inputNums[i]) {
        strike++;
      }
    }
    return strike > 0 ? `${strike}스트라이크` : "";
  }
}

const game = new BaseballGame();

const randomNums = game.generateRandomNumbers();
console.log(`randomNums`, randomNums);
$submit.addEventListener("click", (e) => {
  e.preventDefault();
  game.checkAnswer(randomNums, $userInput.value);
});
