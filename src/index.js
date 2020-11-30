export default function BaseballGame() {
  const inputText = document.querySelector('#user-input');
  const submitBtn = document.querySelector('#submit');
  const resultDiv = document.querySelector('#result');
  const resultMessage = document.createElement('p');

  submitBtn.addEventListener('click', () => this.integrateFunction(inputText.value));
  inputText.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.integrateFunction(inputText.value);
    } else if (e.keyCode !== 8) {
      this.checkNumeric(e);
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

  // 키보드 입력이 숫자만 허용
  this.checkNumeric = e => {
    if (e.keyCode < 49 || e.keyCode > 57) {
      e.preventDefault();
    }
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
  this.validtion = userInput => {
    const isNotThree = userInput.length !== 3;
    const isNotDigit = parseInt(userInput) != userInput;
    const hasZero = userInput.includes('0');
    const isDuplicate = this.checkDuplicate(userInput);
    let err = '';

    isNotThree ? (err += '숫자 수, ') : null;
    isNotDigit ? (err += '숫자아닌 값, ') : null;
    hasZero ? (err += '0 포함, ') : null;
    isDuplicate ? (err += '중복된 값, ') : null;

    inputText.value = '';
    inputText.focus();

    if (isNotThree || isNotDigit || hasZero || isDuplicate) {
      alert(`입력 값이 규칙에 맞지 않습니다. 다시 입력해주세요.\n(${err.slice(0, -2)})`);
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
    const checked = this.validtion(userInput);
    if (checked) {
      if (!this.computerInputNumbers) {
        this.setComputerNum();
      }
      this.play(this.computerInputNumbers, userInput);
    }
  };

  // 재시작 기능
  this.restart = () => {
    this.setComputerNum();
    resultDiv.innerHTML = ''
    resultMessage.removeAttribute('style');
    submitBtn.disabled = false;
    inputText.value = '';
    inputText.focus();
  };

  // 재시작 버튼 생성
  this.createRestartBtn = () => {
    const restartMessage = document.createElement('p');
    const restartBtn = document.createElement('button');
    restartMessage.innerHTML = '게임을 새로 시작하시겠습니까? ';
    restartMessage.id = 'restart-message';
    restartBtn.id = 'game-restart-button';
    restartBtn.innerHTML = '게임 재시작';
    resultDiv.appendChild(restartMessage);
    restartMessage.appendChild(restartBtn);
    restartBtn.addEventListener('click', () => this.restart());
  };

  // 결과값 보여주기
  this.showResult = resultString => {
    if (resultString === '3스트라이크') {
      resultMessage.style.fontWeight = 'bold';
      resultMessage.innerHTML = '🎉정답을 맞추셨습니다🎉';
      resultDiv.appendChild(resultMessage);
      submitBtn.disabled = 'disabled';
      this.createRestartBtn();
    } else {
      resultMessage.innerHTML = resultString;
      resultDiv.appendChild(resultMessage);
    }
  };

  // 결과값 가져오기
  this.play = function (computerInputNumbers, userInputNumbers) {
    let resultString = '';
    const { strike, ball } = this.compareNumber(computerInputNumbers, userInputNumbers);
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
    this.showResult(resultString);

    return resultString;
  };
}

new BaseballGame();
