export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

const baseballGame = new BaseballGame();
baseballGame.play(123, 456); // '낫싱'
baseballGame.play(123, 345); // '1볼'
baseballGame.play(123, 432); // '2볼'
baseballGame.play(123, 312); // '3볼'
baseballGame.play(123, 145); // '1스트라이크'
baseballGame.play(123, 134); // '1볼 1스트라이크'
baseballGame.play(123, 132); // '2볼 1스트라이크'
baseballGame.play(123, 124); // '2스트라이크'
