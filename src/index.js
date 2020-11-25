export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    if (isExist(userInputNumbers, numbers)) return "결과 값 String";
  };
}

const isExist = (aNumber, numbers) => {
  let result = false;
  for (let i = 0; i < numbers.length; i++) {
    if (aNumber === numbers[i]) {
      result = true;
    }
  }
  return result;
};

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
