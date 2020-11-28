const NUMBER_LENGTH = 3;
const userInputEl = document.querySelector('#user-input');
const submitEl = document.querySelector('#submit');

export default class BaseballGame {
  constructor() {
    this.computerNumbers = this.generateComputerNumbers();

    this.setEventListener();
  }

  setEventListener() {
    const clickSubmitEl = () => {
      const userInputNumbers = this.getUserInput();
      if (userInputNumbers) {
        this.play(this.computerNumbers, userInputNumbers);
      }
    }

    submitEl.addEventListener('click', clickSubmitEl);
  }

  getUserInput() {
    let isValid = true;
    const userInput = userInputEl.value;
    const userInputNumbers = userInput.split('').map(Number);

    if (isInvalidNumbers(userInputNumbers)) {
      alert('1~9까지의 3자리 숫자를 중복 없이 입력해주세요');
      userInputEl.focus();
      isValid = false;
    }

    function isInvalidNumbers(numbers) {
      const visited = [];

      // 길이와 NUMBER_LENGTH가 같지 않다면 invalid함
      return numbers.length !== NUMBER_LENGTH || (
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

    return isValid && userInputNumbers;
  }

  generateComputerNumbers() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
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
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < NUMBER_LENGTH; i++) {
      const computerInputNumber = computerInputNumbers[i];
      const userInputNumber = userInputNumbers[i];

      if (computerInputNumber === userInputNumber) {
        strikeCount += 1;
      } else if (computerInputNumbers.includes(userInputNumber)) {
        ballCount += 1;
      }
    }

    return '결과 값 String';
  }
}

new BaseballGame();
