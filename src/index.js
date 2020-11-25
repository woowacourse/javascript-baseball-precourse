export default function BaseballGame() {
  this.randomNumber = makeRandomNumber();

  console.log(this.randomNumber);
  this.play = function (computerInputNumbers, userInputNumbers) {
    // console.log(computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };
}

function makeRandomNumber() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let a = Math.floor(Math.random() * candidates.length + 1);

    if (randomNumber.indexOf(a) === -1) {
      randomNumber.push(a);
    }
  }

  return randomNumber;
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

let game = new BaseballGame();
// game.play(123, 22);
