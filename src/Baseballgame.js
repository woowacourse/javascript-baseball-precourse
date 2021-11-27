/* eslint-disable class-methods-use-this */
// TODO: 11/27 eslint에서 class에 this를 사용하라고 표시.

export default class Baseballgame {
  constructor() {
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

  play(computerInputNumbers, userInputNumbers) {
    // computer가 425일 때, user가 123이면 {개수} 스트라이크
    this.game.strike = 0;
    this.game.ball = 0;

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
    this.render();
  }

  render() {
    console.log({ strike: this.game.strike, ball: this.game.ball });
  }
}
