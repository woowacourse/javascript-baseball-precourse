export default class Baseballgame {
  constructor() {
    this.game = {
      strike: 0,
      ball: 0
    };
  }

  init() {
    this.game = {
      strike: 0,
      ball: 0
    };
  }

  countStrikeBall(computerInputNumbers, userInputNumbers) {
    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        this.game.strike++;
      }
      if (
        computerInputNumbers[i] !== userInputNumbers[i] &&
        computerInputNumbers.includes(userInputNumbers[i])
      ) {
        this.game.ball++;
      }
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    this.init();
    this.countStrikeBall(computerInputNumbers, userInputNumbers);

    if (this.game.strike === 3) return '정답';
    if (this.game.strike || this.game.ball) {
      const ball = this.game.ball ? `${this.game.ball}볼 ` : '';
      const strike = this.game.strike ? `${this.game.strike}스트라이크` : '';
      return ball + strike;
    }
    return '낫싱';
  }
}
