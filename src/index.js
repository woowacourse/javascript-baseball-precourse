// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return '결과 값 String';
//   };
// }

import userInput from './utils/userInput.js';
import makeAnswer from './utils/makeAnswer.js';

export default function BaseballGame() {
  const computerInputNumbers = makeAnswer();
  const userInputNumbers = userInput();
  console.log('computer : ', computerInputNumbers);
  console.log('user : ', userInputNumbers);
}

BaseballGame();
