// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return '결과 값 String';
//   };
// }

import userInput from './input/userInput.js';
import makeAnswer from './utils/makeAnswer.js';

export default function BaseballGame() {
  const computerInputNumbers = makeAnswer();
  const userInputNumbers = userInput();

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log('computer : ', computerInputNumbers);
    console.log('user : ', userInputNumbers);
  };

  this.play(computerInputNumbers, userInputNumbers);
}

new BaseballGame();
