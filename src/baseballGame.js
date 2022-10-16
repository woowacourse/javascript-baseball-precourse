export default class BaseballGame {
  constructor(computerInputNumbers, userInputNumbes) {
    this.computerInputNumbers = computerInputNumbers;
    this.userInputNumbes = userInputNumbes;

    console.log(
      `Computer Input Value : ${this.computerInputNumbers}, User Input Value: ${this.userInputNumbes}`
    );

    this.play();
  }

  play() {
    return this.getResult();
  }

  // 입력값과 목표값이 맞는지?
  isCorrect() {
    return this.computerInputNumbers === this.userInputNumbes;
  }

  getResult() {
    let targetArray = this.computerInputNumbers.split("");
    let userInputNumbes = this.userInputNumbes.split("");

    if (this.isCorrect()) {
      return "정답입니다~!!";
    }

    const strike = this.getStrike(targetArray, userInputNumbes);
    const ball = this.getBall(targetArray, userInputNumbes);

    if (strike == 0 && ball == 0) return "낫싱";
    else if (strike == 0 && ball > 0) return `${ball}볼`;
    else if (ball == 0 && strike > 0) return `${strike}스트라이크`;

    return `${ball}볼 ${strike}스트라이크`;
  }

  getStrike(answer, input) {
    // 스트라이크 개수를 샌다.
    let strike = 0;

    answer.map((digit, index) => {
      if (digit === input[index]) strike++;
    });
    return strike;
  }

  getBall(answer, input) {
    // 볼 개수를 샌다.
    let ball = 0;

    input.map((digit, index) => {
      let answerIdx = answer.indexOf(digit);

      if (answerIdx !== -1 && answerIdx !== index) {
        // answer에 값이 있으며, 현재 인덱스와 answer의 인덱스가 다를 경우 볼 카운트
        ball++;
      }
    });
    return ball;
  }
}
