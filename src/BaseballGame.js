export class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    if (!this.user.isInputValid(userInputNumbers)) return undefined;
    // return 문을 함수로 뺄 때에, 어떻게 해야할지 모르겠다.
    if (computerInputNumbers === userInputNumbers) {
      this.makeVisible('$correctResult');
      return undefined;
    }

    const ball = this.calcBall(computerInputNumbers, userInputNumbers);
    const strike = this.calcStrike(computerInputNumbers, userInputNumbers);

    if (ball || strike) return `${ball} ${strike}`;

    return '낫싱';
  }

  isWin() {}

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
