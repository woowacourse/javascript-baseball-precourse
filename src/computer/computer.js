import { NUMBER_LENGTH } from '../libs/constant.js';

export default class Computer {
  generateRandomNumbers() {
    const answer = [];

    while (answer.length < NUMBER_LENGTH) {
      this.addRandomNum(answer);
    }

    return answer.join('');
  }

  addRandomNum(answer) {
    // eslint-disable-next-line no-undef
    const randomNum = String(MissionUtils.Random.pickNumberInRange(1, 9));

    if (answer.length === 0 || !answer.includes(randomNum)) {
      answer.push(randomNum);
    }
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

    return ball > 0 ? `${ball}볼` : '';
  }

  calcStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }

    return strike > 0 ? `${strike}스트라이크` : '';
  }
}
