import startGame from './game/startGame.js';
import getUserInput from './input/getUserInput.js';
import getGameResult from './game/getGameResult.js';
import printGameResult from './utils/printGameResult.js';
import getRandomNumbers from './utils/getRandomNumbers.js';

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
  // startGame();
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

  $submit.addEventListener('click', ({ target }) => {
    const userInputNumbers = getUserInput();

    if (userInputNumbers) {
      const gameResult = this.play(computerInputNumbers, userInputNumbers);
      done = printGameResult(gameResult);
    }
    if (done && target.id === 'game-restart-button') {
      done = false;
      computerInputNumbers.length = 0;
      restartGame();
    }
  });
}

new BaseballGame();
