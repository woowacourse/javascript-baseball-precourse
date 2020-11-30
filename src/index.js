import getUserInput from './input/getUserInput.js';
import getRandomNumbers from './utils/getRandomNumbers.js';
import getGameResult from './game/getGameResult.js';
import printGameResult from './utils/printGameResult.js';

/*
 ** export default function BaseballGame() {
 **  this.play = function (computerInputNumbers, userInputNumbers) {
 **     return "결과 값 String";
 **  };
 ** }
 */

function restartGame() {
  const $result = document.querySelector('#result');
  const $userInput = document.querySelector('#user-input');

  $result.addEventListener('click', ({ target }) => {
    if (target.id === 'game-restart-button') {
      $userInput.value = '';
      $result.textContent = '';
    }
  });
}

export default function BaseballGame() {
  const $submit = document.querySelector('#submit');
  const computerInputNumbers = getRandomNumbers();

  let done = false;
  console.log(computerInputNumbers);

  this.play = function (computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers.length === 0) {
      computerInputNumbers.push(...getRandomNumbers());
      console.log(computerInputNumbers);
    }
    return getGameResult(computerInputNumbers, userInputNumbers);
  };

  $submit.addEventListener('click', () => {
    const userInputNumbers = getUserInput();

    if (userInputNumbers) {
      const gameResult = this.play(computerInputNumbers, userInputNumbers);
      done = printGameResult(gameResult);
    }

    if (done) {
      done = false;
      computerInputNumbers.length = 0;
      restartGame();
    }
  });
}

new BaseballGame();
