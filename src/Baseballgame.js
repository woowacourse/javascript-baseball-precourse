/* eslint-disable class-methods-use-this */
// TODO: 11/27 eslint에서 class에 this를 사용하라고 표시.

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

  validate(userInputNumbers) {
    if (new Set(userInputNumbers).size !== 3) return false;
    if (Number.isNaN(userInputNumbers)) return false;
    if (userInputNumbers.match(/[0]/)) return false;
    return true;
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
    return [this.game.strike, this.game.ball];
  }

  play(computerInputNumbers, userInputNumbers) {
    this.init();
    [this.game.strike, this.game.ball] = this.countStrikeBall(
      computerInputNumbers,
      userInputNumbers
    );

    if (this.game.strike === 3) return '정답';
    if (this.game.strike || this.game.ball) {
      const ball = this.game.ball ? `${this.game.ball}볼 ` : '';
      const strike = this.game.strike ? `${this.game.strike}스트라이크` : '';
      return ball + strike;
    }
    return '낫싱';
  }
}
