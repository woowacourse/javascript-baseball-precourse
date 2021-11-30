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
      if (this.isBall(computerInputNumbers, userInputNumbers, i)) {
        ball++;
      }
    }
    return ball > 0 ? `${ball}볼` : '';
  }

  isBall(computerInputNumbers, userInputNumbers, i) {
    return (
      computerInputNumbers.includes(userInputNumbers[i]) &&
      computerInputNumbers[i] !== userInputNumbers[i]
    );
  }

  calculateStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (this.isStrike(computerInputNumbers, userInputNumbers, i)) {
        strike++;
      }
    }
    return strike > 0 ? `${strike}스트라이크` : '';
  }

  isStrike(computerInputNumbers, userInputNumbers, i) {
    return computerInputNumbers[i] === userInputNumbers[i];
  }
}
