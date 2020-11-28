const userInputEl = document.querySelector('#user-input');
const submitEl = document.querySelector('#submit');

export default class BaseballGame {
  constructor() {
    this.computerNumbers = this.generateComputerNumbers();

    this.setEventListener();
  }

  setEventListener() {
    submitEl.addEventListener('click', this.getUserInput);
  }

  getUserInput() {
    const userInput = userInputEl.value;
    const userInputNumbers = userInput.split('');

    if (hasDuplicates(userInputNumbers)) {
      alert('1~9까지의 숫자를 중복 없이 입력해주세요');
      userInputEl.focus();
    }

    function hasDuplicates(array = []) {
      const visited = [];

      return array.some((item) => {
        let result = false;

        if (visited.includes(item)) {
          result = true;
        } else {
          visited.push(item);
        }

        return result;
      });
    }
  }

  generateComputerNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);
      
      if (isUniqueNumber(numbers, randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    function isUniqueNumber(numbers, randomNumber) {
      return numbers.every((number) => number !== randomNumber);
    }

    return numbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

new BaseballGame();
