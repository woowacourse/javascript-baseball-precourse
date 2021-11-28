import getComputerNumber from './getComputerNumber.js';
import getUserNumber from './getUserNumber.js';
import { calStrike, calBall } from './calculateScore.js';
import returnBallStrike from './convertScoreToString.js';

export default function BaseballGame() {
  const hint = document.getElementById('result');
  hint.style.display = 'None';

  const restartButton = document.getElementById('game-restart-button');
  const restartMent = document.getElementById('game-restart-ment');
  restartButton.style.display = 'None';
  restartMent.style.display = 'None';

  //make computer num
  const computerInputNumbers = getComputerNumber();
  console.log(computerInputNumbers);

  //get user num
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', submitButtonOn);

  function submitButtonOn() {
    const userInputNumbers = getUserNumber(); //userinputNuber 가 false면 결과 display안해야함
    const result = play(computerInputNumbers, userInputNumbers); //need to 손보기
    displayResult(result);
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
}

new BaseballGame();
