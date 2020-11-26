export default function BaseballGame() {
  const userInput = document.getElementById('user-input');
  const submitButton = document.getElementById('submit');

  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
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
    } else if (userInputNumbers < 100 || 999 < userInputNumbers) {
      return '세자리 수만 입력 가능합니다.';
    } else if (String(userInputNumbers).includes('0')) {
      return '1에서 9까지의 수만 입력 가능합니다';
    } else if (!this.isComposedOfDifferentNumber(userInputNumbers)) {
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

  this.handleClickSubmitButton = function () {
    const userInputNumbers = Number(userInput.value);
    const notification = this.makeNotificationMessage(userInputNumbers);
    if (notification) {
      alert(notification);
      return;
    }
  }.bind(this);
  submitButton.addEventListener('click', this.handleClickSubmitButton);
}

new BaseballGame();
