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

    return this.isPossible(userInputNumbers) ?
      this.play(this.computerInputNumbers, userInputNumbers) :
      this.randerErrorMessage('잘못된 입력입니다. 다시 입력해주세요');
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

  getStrikeCount = (computerInputNumbers, userInputNumbers) => {
    function process(strikeCount, number, computerIndex) {
      const userIndex = userInputNumbers.indexOf(number);
      if (userIndex == computerIndex) {
        return strikeCount + 1;
      }
      return strikeCount;
    }
    return computerInputNumbers.split('').reduce(process, 0);
  }

  getBallCount = (computerInputNumbers, userInputNumbers) => {
    function process(ballCount, number, computerIndex) {
      const userIndex = userInputNumbers.indexOf(number);
      if (userIndex === -1 || userIndex === computerIndex) {
        return ballCount;
      }
      return ballCount + 1;
    }
    return computerInputNumbers.split('').reduce(process, 0);
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

    return this.isCorrect(strikeCount) ?
      this.renderCorrectMessage() :
      this.renderGameResult(strikeCount, ballCount);
  }
}

new BaseballGame();
