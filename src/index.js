import getComputerNumber from './getComputerNumber.js';
import getUserNumber from './getUserNumber.js';

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

  /* Calculate srike ball */
  function calculateDuplicatedNum(Number1, Number2) {
    const a = String(Number1).split('');
    const b = String(Number2).split('');
    const Intersection = a.filter(x => b.includes(x));
    return Intersection.length;
  }

  function calStrike(Number1, Number2) {
    const a = String(Number1).split('');
    const b = String(Number2).split('');
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (a[i] === b[i]) {
        count++;
      }
    }
    return count;
  }

  function calBall(Number1, Number2) {
    return (
      calculateDuplicatedNum(Number1, Number2) - calStrike(Number1, Number2)
    );
  }

  /* Print Result */
  function returnBallStrike(ball, strike) {
    if (ball == 0 && strike == 0) {
      return '낫싱';
    } else if (ball !== 0 && strike == 0) {
      return `${ball}볼`;
    } else if (ball == 0 && strike !== 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }

  function play(computerInputNumbers, userInputNumbers) {
    const strike = calStrike(computerInputNumbers, userInputNumbers);
    const ball = calBall(computerInputNumbers, userInputNumbers);
    return returnBallStrike(ball, strike);
  }
}

new BaseballGame();
