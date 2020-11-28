export default function BaseballGame() {
  const inputText = document.querySelector('#user-input');
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', () =>
    this.checkInput(inputText.value)
  );

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

  // 중복 값이 있는지 확인
  this.checkDuplicate = value => {
    const words = value.split('');
    const wordsSet = new Set(words);
    if (words.length == wordsSet.size) {
      return false;
    } else {
      return true;
    }
  };

  // 규칙에 맞는 값인지 확인
  this.checkInput = value => {
    const isNotThree = value.length !== 3;
    const isNotDigit = parseInt(value) != value;
    const hasZero = value.includes('0');
    const isDuplicate = this.checkDuplicate(value);
    if (isNotThree || isNotDigit || hasZero || isDuplicate) {
      alert('입력 값이 규칙에 맞지 않습니다. 다시 입력해주세요.');
      inputText.value = '';
      inputText.focus();
    }
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

new BaseballGame();
