import getComputerNumber from './getComputerNumber.js';
import getUserNumber from './getUserNumber.js';
import { calStrike, calBall } from './calculateScore.js';
import returnBallStrike from './convertScoreToString.js';

export default function BaseballGame() {
  const hint = document.getElementById('result');
  document.getElementById('result').style.display = 'None';
  document.getElementById('game-restart-button').style.display = 'None';

  //make computer num
  const computerInputNumbers = getComputerNumber();
  console.log(computerInputNumbers);

  //get user num
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', submitButtonOn);
  function submitButtonOn() {
    const userInputNumbers = getUserNumber();
    const result = play(computerInputNumbers, userInputNumbers); //need to 손보기
    if (result !== '3스트라이크') {
      hint.innerHTML = result;
      hint.style.display = '';
    } else {
      document.getElementById('game-restart-button').style.display = '';
    }
  }

  function play(computerInputNumbers, userInputNumbers) {
    const strike = calStrike(computerInputNumbers, userInputNumbers);
    const ball = calBall(computerInputNumbers, userInputNumbers);
    return returnBallStrike(ball, strike);
  }
}

new BaseballGame();
