import createRandomNumber from './assets/computer';

// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
console.log(createRandomNumber());

//구조는 main class안에 두 개의 매개변수를 받은 후 play시킨다.