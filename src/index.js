import { state } from './state.js';
import makeRandomNumber from './functions/make-random-number.js';
import checkUserInputValid from './functions/check-user-input-valid.js';
import setBallStrike from './functions/set-ball-strike.js';
import initialBallStrikeCount from './functions/initial-ball-strike-count.js';

export default function BaseballGame() {
  const submitButton = document.getElementById('submit');
  state.computerInput = makeRandomNumber();

  this.play = function (computerInput, userInput) {
    setBallStrike(computerInput, userInput);
  };

  submitButton.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const userInputArray = userInput.split('').map(x => parseInt(x));
    const userInputSet = [...new Set(userInputArray)];
    state.userInput = userInputArray;
    initialBallStrikeCount();
    if (checkUserInputValid(userInput, userInputArray, userInputSet)) {
      const resultMessage = this.play(state.computerInput, state.userInput);
    } else {
      alert('올바르지 않은 입력 정보');
    }
  });
}

new BaseballGame();
