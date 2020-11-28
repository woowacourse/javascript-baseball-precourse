const USER_INPUT_LENGTH = 3;

export default class BaseballGame {
  constructor() {
    this.$result = document.getElementById('result');
    this.$userInput = document.getElementById('user-input');
    this.$submit = document.getElementById('submit');
    this.$submit.addEventListener('click', this.handleClickSubmit);

    this.computerInputNumbers = this.createComputerInputNumbers();
  }

  handleClickRestartGame = () => {
    this.computerInputNumbers = this.createComputerInputNumbers();
    this.$userInput.value = '';
    this.$result.innerHTML = '';
  }

  createComputerInputNumbers = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let computerNumbers = '';
    while (computerNumbers.length !== 3) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      computerNumbers += numbers[randomIndex];
      numbers.splice(randomIndex, 1);
    }

    return computerNumbers;
  }

  handleClickSubmit = () => {
    const userInputNumbers = this.$userInput.value;

    if (this.isPossible(userInputNumbers)) {
      this.play(this.computerInputNumbers, userInputNumbers);
    } else {
      this.randerErrorMessage('잘못된 입력입니다. 다시 입력해주세요');
    }
  }

  isThreeDigitNumber = (numbers) => {
    return /^[1-9]{3}$/g.test(numbers);
  }

  isNotDuplicate = (numbers) => {
    function compareNumberIndex(number) {
      return numbers.indexOf(number) === numbers.lastIndexOf(number);
    }
    return numbers.split('').every(compareNumberIndex);
  }

  isPossible = (numbers) => {
    if (this.isThreeDigitNumber(numbers) && this.isNotDuplicate(numbers)) {
      return true;
    }
    return false;
  }

  randerErrorMessage = (message) => {
    alert(message);
    this.$userInput.value = '';
    this.$userInput.focus();
  }

  getBallCount = (computerInputNumbers, userInputNumbers) => {
    let ball = 0;
    for (let i = 0; i < USER_INPUT_LENGTH; i += 1) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        continue;
      }
      if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball += 1;
      }
    }
    return ball;
  };

  getStrikeCount = (computerInputNumbers, userInputNumbers) => {
    let strike = 0;
    for (let i = 0; i < USER_INPUT_LENGTH; i += 1) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike += 1;
      }
    }
    return strike;
  }

  isCorrect = (strikeCount) => strikeCount === USER_INPUT_LENGTH;

  renderCorrectMessage = () => {
    this.$result.innerHTML = `
      <p>🎉 <strong>정답을 맞추셨습니다!</strong> 🎉</p>
      <p>
        게임을 새로 시작하시겠습니까?
        <button id="game-restart-button">게임 재시작</button>
      </p>
    `;

    const $gameRestartButton = document.querySelector('#game-restart-button');
    $gameRestartButton.addEventListener('click', this.handleClickRestartGame);
  }

  renderGameResult = (strike, ball) => {
    let resultText = '';

    if (strike === 0 && ball === 0) {
      resultText = '낫띵';
    }
    if (ball) {
      resultText += `${ball}볼`;
    }
    if (strike) {
      resultText += ` ${strike}스트라이크`;
    }

    this.$result.innerHTML = `<p>${resultText}</p>`;
  }

  play = (computerInputNumbers, userInputNumbers) => {
    const ballCount = this.getBallCount(computerInputNumbers, userInputNumbers);
    const strikeCount = this.getStrikeCount(computerInputNumbers, userInputNumbers);

    if (this.isCorrect(strikeCount)) {
      this.renderCorrectMessage();
    } else {
      console.log(this.computerInputNumbers);
      this.renderGameResult(strikeCount, ballCount);
    }
  }
}

new BaseballGame();
