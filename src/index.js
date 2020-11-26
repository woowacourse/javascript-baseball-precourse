// export default function BaseballGame() {
//   this.this.play = function (computerInputNumbers, userInputNumbers) {
//     return '결과 값 String';
//   };
// }

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

// new BaseballGame();

import { makeAnswer } from './makeAnswer.js';

const BaseballGame = () => {
  const answer = makeAnswer();
  console.log(answer);
};

BaseballGame();
