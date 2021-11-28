export default class BaseballGame {
  constructor() {
    this.answer = this.makeRandomNumbers();
    this.userInput = document.getElementById("user-input");
    this.result = document.getElementById("result");
  }

  play(computerInputNumbers, userInputNumbers) {}

  makeRandomNumbers() {
    let randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      randomNumbers.add(window.MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return Array.from(randomNumbers);
  }
}

new BaseballGame();
