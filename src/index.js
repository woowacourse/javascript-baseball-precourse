import gameProgress from './game/gameProgress.js';
import getUserInput from './input/getUserInput.js';
import getRandomNumbers from './utils/getRandomNumbers.js';

export default function BaseballGame() {
  // 이벤트 리스너 등록
  const $submit = document.querySelector('#submit');

  const computerInputNumbers = getRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return gameProgress(computerInputNumbers, userInputNumbers);
  };

  $submit.addEventListener('click', () => {
    const userInputNumbers = getUserInput();

    if (userInputNumbers) {
      this.play(computerInputNumbers, userInputNumbers);
    }
  });
}

new BaseballGame();
