export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    let valueOfStrike = 0;
    let valueOfBall = 0;
    for (let i = 0; i < 3; i++) {
      if (String(computerInputNumbers)[i] === String(userInputNumbers)[i]) {
        valueOfStrike++;
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (String(computerInputNumbers)[i] === String(userInputNumbers)[j]) {
          valueOfBall++;
          continue;
        }
      }
    }

    valueOfBall -= valueOfStrike;

    return valueOfStrike === 0 && valueOfBall === 0
      ? '낫싱'
      : valueOfStrike === 0 && valueOfBall !== 0
      ? `${valueOfBall}볼`
      : valueOfStrike !== 0 && valueOfBall === 0
      ? `${valueOfStrike}스트라이크`
      : `${valueOfBall}볼 ${valueOfStrike}스트라이크`;
  }
}

const baseballGame = new BaseballGame();
console.log(baseballGame.play(123, 456)); // '낫싱'
console.log(baseballGame.play(123, 345)); // '1볼'
console.log(baseballGame.play(123, 432)); // '2볼'
console.log(baseballGame.play(123, 312)); // '3볼'
console.log(baseballGame.play(123, 145)); // '1스트라이크'
console.log(baseballGame.play(123, 134)); // '1볼 1스트라이크'
console.log(baseballGame.play(123, 132)); // '2볼 1스트라이크'
console.log(baseballGame.play(123, 124)); // '2스트라이크'
