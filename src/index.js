import getUserInput from './input/getUserInput.js';
import getRandomNumbers from './utils/getRandomNumbers.js';
import getGameResult from './game/getGameResult.js';

/*
 ** export default function BaseballGame() {
 **  this.play = function (computerInputNumbers, userInputNumbers) {
 **     return "결과 값 String";
 **  };
 ** }
 */

export default function BaseballGame() {
  const $submit = document.querySelector('#submit');
  const $app = document.querySelector('#app');

  const computerInputNumbers = getRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return getGameResult(computerInputNumbers, userInputNumbers);
  };

  $submit.addEventListener('click', () => {
    const userInputNumbers = getUserInput();

    if (userInputNumbers) {
      const gameResult = this.play(computerInputNumbers, userInputNumbers);
      console.log(typeof gameResult, gameResult);
    }
  });
}

new BaseballGame();
