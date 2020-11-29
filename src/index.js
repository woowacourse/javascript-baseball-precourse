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
  $submit.addEventListener('click', getUserInput);

  // 정답 생성
  const computerInputNumbers = getRandomNumbers();

  // USER에게 인풋 받기
  const userInputNumbers = getUserInput();

  this.play = function (computerInputNumbers, userInputNumbers) {
    if (userInputNumbers) {
      console.log('computer : ', computerInputNumbers);
      console.log('user : ', userInputNumbers);
    }
  };

  this.play(computerInputNumbers, userInputNumbers);
}

new BaseballGame();
