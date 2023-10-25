export default function BaseballGame() {
  const computerInputNumbers = generateComputerNumbers();

  this.play = function (userInputNumbers) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikes++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        balls++;
      }
    }

    return getResultText(balls, strikes);
  };

  function generateComputerNumbers() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9).toString());
    }
    return Array.from(numbers);
  }

  function getResultText(balls, strikes) {
    if (balls === 0 && strikes === 0) return '낫싱';
    if (strikes === 3) return '3스트라이크!';
    return `${balls > 0 ? balls + '볼' : ''} ${strikes > 0 ? strikes + '스트라이크' : ''}`.trim();
  }
}

const baseballGame = new BaseballGame();
const userInputField = document.getElementById('user-input');
const resultDisplay = document.getElementById('result');
const gameRestartButton = document.getElementById('game-restart-button');
const congratsMessage = document.getElementById('congrats-message');

if (!userInputField || !resultDisplay || !gameRestartButton || !congratsMessage) {
  console.error('Some required elements are missing from the DOM');
} else {
  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = userInputField.value.trim();

    if (isValidInput(userInput)) {
      const result = baseballGame.play(userInput.split(''));
      displayResult(result);
    } else {
      alert('1~9까지의 반복되지 않는 서로 다른 숫자 3개를 입력해주세요!');
    }
  });

  function isValidInput(input) {
    return input && input.length === 3 && new Set(input).size === 3 && /^[0-9]+$/.test(input);
  }

  function displayResult(result) {
    resultDisplay.textContent = result;

    if (result === '3스트라이크!') {
      congratsMessage.style.display = 'block';
      gameRestartButton.style.display = 'block';
    } else {
      congratsMessage.style.display = 'none';
      gameRestartButton.style.display = 'none';
    }
  }

  gameRestartButton.addEventListener('click', () => {
    location.reload();
  });
}