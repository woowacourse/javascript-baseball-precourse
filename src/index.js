import { generateComputerNumber } from './utils/generateComputerNumber.js';

const onUserInputSubmit = (event) => {
  event.preventDefault();
  const userInput = document.querySelector('#user-input');
  console.log('userInput : ', userInput);
};

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    console.log('시작');
  }
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', onUserInputSubmit);

const game = new BaseballGame();
game.play();
