import getComputerNumber from './getComputerNumber.js';
import getUserNumber from './getUserNumber.js';
import { calStrike, calBall } from './calculateScore.js';
import returnBallStrike from './convertScoreToString.js';

export default function BaseballGame() {
  const hint = document.getElementById('result');
  const restartButton = document.getElementById('game-restart-button');
  const restartMent = document.getElementById('game-restart-ment');
  const submitButton = document.getElementById('submit');

  hint.style.display = 'None';
  restartButton.style.display = 'None';
  restartMent.style.display = 'None';

  const computerInputNumbers = getComputerNumber();
  submitButton.addEventListener('click', submitButtonOn);

  function submitButtonOn() {
    const userInputNumbers = getUserNumber();
    if (!isNaN(userInputNumbers)) {
      const result = play(computerInputNumbers, userInputNumbers);
      displayResult(result);
    }
  }

  function play(computerInputNumbers, userInputNumbers) {
    const strike = calStrike(computerInputNumbers, userInputNumbers);
    const ball = calBall(computerInputNumbers, userInputNumbers);
    return returnBallStrike(ball, strike);
  }

  function displayResult(result) {
    if (result !== '3스트라이크') {
      hint.innerHTML = result;
      hint.style.display = '';
    } else {
      restartButton.style.display = '';
      restartMent.style.display = '';
    }
  }

  console.log(computerInputNumbers);
}

new BaseballGame();
