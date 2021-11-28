import { randomThreeNumbers } from '../utils/random.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = randomThreeNumbers();
  }

  get answer() {
    return this.computerInputNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    [...computerInputNumbers].forEach((computerInputNumber, index) => {
      if (computerInputNumber === userInputNumbers[index]) strike += 1;
      else if (computerInputNumbers.includes(userInputNumbers[index])) ball += 1;
    });

    return strike && ball
      ? `${ball}볼 ${strike}스트라이크`
      : !strike && !ball
      ? `낫싱`
      : !strike
      ? `${ball}볼`
      : `${strike}스트라이크`;
  }

  restart() {
    this.computerInputNumbers = randomThreeNumbers();
  }
}
