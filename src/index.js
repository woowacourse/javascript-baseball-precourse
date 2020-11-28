// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  _makeRandomValue(max, min) {
    // max ~ min 두 값 사이의 값을 출력(max, min값 포함)
    return Math.floor(Math.random() * max) + min
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String"
  }
}

new BaseballGame()
