// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return '결과 값 String';
//   };
// }

import makeAnswer from './makeAnswer.js';

export default function BaseballGame() {
  const answer = makeAnswer();
  console.log(answer);
}

BaseballGame();
