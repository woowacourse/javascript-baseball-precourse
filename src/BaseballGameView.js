export class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    const ball = this.calculateBall(computerInputNumbers, userInputNumbers);
    const strike = this.calculateStrike(computerInputNumbers, userInputNumbers);
    if (ball || strike) {
      return `${ball} ${strike}`;
    }
    return '낫싱';
  }

  calculateBall(computerInputNumbers, userInputNumbers) {
    let ball = 0;
    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (
        computerInputNumbers.includes(userInputNumbers[i]) &&
        computerInputNumbers[i] !== userInputNumbers[i]
      ) {
        ball++;
      }
    }
    return ball > 0 ? `${ball}볼` : '';
  }

  calculateStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }
    return strike > 0 ? `${strike}스트라이크` : '';
  }
}
