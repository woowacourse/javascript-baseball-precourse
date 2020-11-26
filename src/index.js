export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

function randomNumberMaker(randomNumberLength) {
  const maxNum = 9
  const minNum = 1
  let randomNumberArray = [];

  while (randomNumberArray.length < randomNumberLength) {
    let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

    if (!randomNumberArray.includes(randomNumber)) {
      randomNumberArray.push(randomNumber)
    }
  }

  return randomNumberArray;
}

new BaseballGame();
