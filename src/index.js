export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = "";

    this.init();
  }

  init = () => {
    this.computerInputNumbers = this.generateRandomNumbers();
  };

  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != 3) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    let resultMessage = "";
    let strikeCount = 0;
    let ballCount = 0;

    if (computerInputNumbers === userInputNumbers) {
      resultMessage = "🎉 정답을 맞추셨습니다. 🎉";
      this.isEnded = true;
      return resultMessage;
    }

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) strikeCount++;
      else if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }

    if (ballCount) resultMessage += `${ballCount}볼`;
    if (strikeCount) resultMessage += ` ${strikeCount}스트라이크`;
    if (!ballCount && !strikeCount) resultMessage = "낫싱";
    return resultMessage;
  }
}
const game = new BaseballGame();
