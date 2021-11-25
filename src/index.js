import { state } from './state.js';
import makeRandomNumber from './functions/make-random-number.js';
import checkUserInputValid from './functions/check-user-input-valid.js';
import setBallStrike from './functions/set-ball-strike.js';
import initialBallStrikeCount from './functions/initial-ball-strike-count.js';
import makeResultMessage from './functions/make-result-message.js'

export default function BaseballGame() {
  const submitButton = document.getElementById('submit');
  state.computerInput = makeRandomNumber();

  this.play = function (computerInput, userInput) {
    setBallStrike(computerInput, userInput);
    const resultMessage = makeResultMessage();
    
    return resultMessage;
  };

  submitButton.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const userInputArray = userInput.split('').map(x => parseInt(x));
    const userInputSet = [...new Set(userInputArray)];
    state.userInput = parseInt(userInput);
    initialBallStrikeCount();
    if (checkUserInputValid(userInput, userInputArray, userInputSet)) {
      const resultMessage = this.play(state.computerInput, state.userInput);
    } 
  });
}

new BaseballGame();
