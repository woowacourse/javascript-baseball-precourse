export default class BaseballGame {
  constructor() {
    this.answerNumbers = this.makeAnswerNumbers();
  }

  makeAnswerNumbers = () => {
    const numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];

    for (let i = 0; i < 3; i++) {
      const randomNumberIndex = Math.floor(Math.random() * numberSet.length);

      result.push(numberSet[randomNumberIndex]);
      numberSet.splice(randomNumberIndex, 1);
    }

    return result;
  };

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
