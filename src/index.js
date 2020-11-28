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
    const userInputNumbers = userInput.split('').map(Number);
    
    if (isInvalidNumbers(userInputNumbers)) {
      alert('1~9까지의 숫자를 중복 없이 입력해주세요');
      userInputEl.focus();
    }

    function isInvalidNumbers(numbers) {
      const visited = [];

      // 길이가 3이 아니라면
      return numbers.length !== 3 || (
        numbers.some((number) => {
          let isInvalid = false;

          // 1 부터 9 까지의 범위가 아니라면 invalid함
          if (!(number >= 1 && number <= 9)) { 
            isInvalid = true;
          }
          // 중복된 값이라면 invalid함
          else if (visited.includes(number)) {
            isInvalid = true;
          }
          // 중복된 값 체크를 위해 visited 배열에 추가
          else {
            visited.push(number);
          }

          return isInvalid;
        })
      )
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
