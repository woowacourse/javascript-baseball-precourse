import utils from "./utils.js";

export default class BaseballGame {
  constructor() {
    this.answer = utils();
  }
  // play(computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // }
}

let baseballGame = new BaseballGame();

// 예시
// play(123, 456); // '낫싱'
// play(123, 345); // '1볼'
// play(123, 432); // '2볼'
// play(123, 312); // '3볼'
// play(123, 145); // '1스트라이크'
// play(123, 134); // '1볼 1스트라이크'
// play(123, 132); // '2볼 1스트라이크'
// play(123, 124); // '2스트라이크'
