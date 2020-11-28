export default function BaseballGame() {
  this.computerInputNumbers;

  const inputText = document.querySelector('#user-input');
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', () => console.log(inputText.value));

  // 3개의 다른 숫자 세개 생성
  this.getRandomNumber = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let pickedNumbers = [];
    for (let i = 0; i < 3; i++) {
      let picked;
      picked = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      pickedNumbers.push(picked);
    }
    return pickedNumbers;
  };

  // 생성된 랜덤 숫자 세팅
  this.setComputerNum = () => {
    const computerNum = this.getRandomNumber();
    this.computerInputNumbers = computerNum.join('');
  };

  // 중복 값이 있는지 확인
  this.checkDuplicate = userInput => {
    const words = userInput.split('');
    const wordsSet = new Set(words);
    if (words.length == wordsSet.size) {
      return false;
    } else {
      return true;
    }
  };

  // 규칙에 맞는 값인지 확인
  this.checkInput = userInput => {
    const isNotThree = userInput.length !== 3;
    const isNotDigit = parseInt(userInput) != userInput;
    const hasZero = userInput.includes('0');
    const isDuplicate = this.checkDuplicate(userInput);
    inputText.value = '';
    inputText.focus();
    if (isNotThree || isNotDigit || hasZero || isDuplicate) {
      alert('입력 값이 규칙에 맞지 않습니다. 다시 입력해주세요.');
      return false;
    } else {
      return true;
    }
  };

  // 컴퓨터의 숫자와 입력숫자 비교
  this.compareNumber = userInput => {
    const result = { strike: 0, ball: 0 };
    for (let i = 0; i < 3; i++) {
      if (userInput[i] === this.computerInputNumbers[i]) {
        result.strike++;
        continue;
      }
      if (this.computerInputNumbers.includes(userInput[i])) {
        result.ball++;
      }
    }

    return result;
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

new BaseballGame();
