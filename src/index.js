import getComputerInputNumbers from './game/getComputerInputNumbers.js';
import getUserInputNumbers from './game/getUserInputNumbers.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = [];
    this.submitClickEvent();
    this.main();
  }

  submitClickEvent() {
    const $submit = document.querySelector('#submit');
    $submit.addEventListener('click', (event) => {
      event.preventDefault();
      const userInputNumbers = getUserInputNumbers();
      console.log(this.computerInputNumbers);
      console.log(userInputNumbers);
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }

  main() {
    this.computerInputNumbers = getComputerInputNumbers();
  }
}

new BaseballGame();
