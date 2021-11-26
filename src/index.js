import getComputerInputNumbers from './getInputNumbers/getComputerInputNumbers.js';
import getUserInputNumbers from './getInputNumbers/getUserInputNumbers.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = [];
    this.$submit = document.querySelector('#submit');
    this.$userInput = document.querySelector('#user-input');
    this.submitClickEvent();
    this.main();
  }

  initializeUserInput() {
    this.$userInput.value = '';
    this.$userInput.focus();
  }

  submitClickEvent() {
    this.$submit.addEventListener('click', (event) => {
      event.preventDefault();
      const userInputNumbers = getUserInputNumbers(this.$userInput);
      if (typeof userInputNumbers === 'string') {
        this.initializeUserInput();
        alert('공백 없이 중복되지 않는 숫자 3개를 입력해주세요!');
        return;
      }
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
