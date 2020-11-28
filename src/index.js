export default function BaseballGame() {
  this.computerInputNumbers;

  const inputText = document.querySelector('#user-input');
  const submitButton = document.querySelector('#submit');
  const resultText = document.querySelector('#result');

  submitButton.addEventListener('click', () =>
    this.integrateFunction(inputText.value)
  );
  inputText.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      this.integrateFunction(inputText.value);
    }
  });

  // 3개의 다른 숫자 세개 생성
  this.getRandomNumber = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let pickedNumbers = [];
    for (let i = 0; i < 3; i++) {
      const picked = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
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
  this.compareNumber = (computerInput, userInput) => {
    const result = { strike: 0, ball: 0 };
    for (let i = 0; i < 3; i++) {
      if (userInput[i] === computerInput[i]) {
        result.strike++;
        continue;
      }
      if (computerInput.includes(userInput[i])) {
        result.ball++;
      }
    }

    return result;
  };

  // 기능 통합
  this.integrateFunction = userInput => {
    const checked = this.checkInput(userInput);
    if (checked) {
      if (!this.computerInputNumbers) {
        this.setComputerNum();
      }
      this.play(this.computerInputNumbers, userInput);
    }
  };

  // 결과값 가져오기
  this.play = function (computerInputNumbers, userInputNumbers) {
    let resultString = '';
    const { strike, ball } = this.compareNumber(
      computerInputNumbers,
      userInputNumbers
    );
    if (strike === 0 && ball === 0) {
      resultString = '낫싱';
    } else {
      if (ball !== 0) {
        resultString = resultString.concat(`${ball}볼 `);
      }
      if (strike !== 0) {
        resultString = resultString.concat(`${strike}스트라이크`);
      }
    }
    resultString = resultString.trim();
    resultText.innerHTML = resultString;
    return resultString;
  };
}

new BaseballGame();
