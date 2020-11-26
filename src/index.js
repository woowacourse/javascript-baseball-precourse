export default function BaseballGame() {
  const userInput = document.getElementById('user-input');
  const submitButton = document.getElementById('submit');
  const result = document.getElementById('result');

  this.status = 'PLAYING';

  this.play = function (computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) {
      this.status = 'END';
      return '<h4>🎉정답을 맞추셨습니다!🎉</h4>';
    }
    const balls = this.countBalls(computerInputNumbers, userInputNumbers);
    const strikes = this.countStrikes(computerInputNumbers, userInputNumbers);
    if (balls && !strikes) {
      return `<h5>${balls}볼</h5>`;
    }
    if (!balls && strikes) {
      return `<h5>${strikes}스트라이크</h5>`;
    }
    if (balls && strikes) {
      return `<h5>${balls}볼 ${strikes}스트라이크</h5>`;
    }
    if (!balls && !strikes) {
      return `<h5>낫싱</h5>`;
    }
  };

  this.makeRandomNumbers = function () {
    while (true) {
      const first = Math.floor(Math.random() * 9 + 1);
      const second = Math.floor(Math.random() * 9 + 1);
      const third = Math.floor(Math.random() * 9 + 1);
      const numbers = first * 100 + second * 10 + third;
      if (this.isComposedOfDifferentNumber(numbers)) {
        console.log(numbers);
        return numbers;
      }
    }
  };

  this.isComposedOfDifferentNumber = function (numbers) {
    const first = String(numbers)[0];
    const second = String(numbers)[1];
    const third = String(numbers)[2];
    if (first !== second && second !== third && third !== first) {
      return true;
    }
    return false;
  };

  this.makeNotificationMessage = function (userInputNumbers) {
    if (typeof userInputNumbers !== 'number' || isNaN(userInputNumbers)) {
      return '숫자만 입력 가능합니다.';
    }
    if (userInputNumbers < 100 || 999 < userInputNumbers) {
      return '세자리 수만 입력 가능합니다.';
    }
    if (String(userInputNumbers).includes('0')) {
      return '1에서 9까지의 수만 입력 가능합니다';
    }
    if (!this.isComposedOfDifferentNumber(userInputNumbers)) {
      return '서로 다른 숫자로 구성된 수만 입력 가능합니다.';
    }
  };

  this.countStrikes = function (computerInputNumbers, userInputNumbers) {
    let count = 0;
    const stringComputerInputNumbers = String(computerInputNumbers);
    const stringUserInputNumbers = String(userInputNumbers);
    for (let i = 0; i < 3; i++) {
      if (stringComputerInputNumbers[i] === stringUserInputNumbers[i]) {
        count += 1;
      }
    }
    return count;
  };

  this.countBalls = function (computerInputNumbers, userInputNumbers) {
    let count = 0;
    const stringComputerInputNumbers = String(computerInputNumbers);
    const stringUserInputNumbers = String(userInputNumbers);
    for (let i = 0; i < 3; i++) {
      const pos = stringComputerInputNumbers.indexOf(stringUserInputNumbers[i]);
      if (pos !== i && pos !== -1) {
        count += 1;
      }
    }
    return count;
  };

  this.addRestart = function () {
    const restartSpan = document.createElement('span');
    const restartButton = document.createElement('button');
    restartSpan.innerText = '게임을 새로 시작하시겠습니까? ';
    restartButton.innerText = '게임 재시작';
    result.appendChild(restartSpan);
    result.appendChild(restartButton);
  };

  this.initComputerInputNumbers = this.makeRandomNumbers();

  this.handleClickSubmitButton = function () {
    if (this.status === 'END') {
      return;
    }
    const userInputNumbers = Number(userInput.value);
    const notification = this.makeNotificationMessage(userInputNumbers);
    if (notification) {
      alert(notification);
      return;
    }
    const results = this.play(this.initComputerInputNumbers, userInputNumbers);
    result.innerHTML = results;
    if (this.status === 'END') {
      this.addRestart();
    }
  }.bind(this);

  submitButton.addEventListener('click', this.handleClickSubmitButton);
}

new BaseballGame();
