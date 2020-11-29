import getUserInput from './input/getUserInput.js';
import getRandomNumbers from './utils/getRandomNumbers.js';

function prepareGameSet() {
  //
}

function startGame() {
  //
}

export default function BaseballGame() {
  // 이벤트 리스너 등록
  const $submit = document.querySelector('#submit');

  const computerInputNumbers = getRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log('computer : ', computerInputNumbers);
    console.log('user : ', userInputNumbers);
  };

  $submit.addEventListener('click', () => {
    const userInputNumbers = getUserInput();

    if (userInputNumbers) {
      this.play(computerInputNumbers, userInputNumbers);
    }
  });
}

new BaseballGame();
