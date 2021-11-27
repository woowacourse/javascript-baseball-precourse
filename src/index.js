import { VALIDATE_MESSAGES } from './constants.js';
import createComputerInputNumbers from './createComputerInputNumbers.js';
import countStrikeAndBall from './countStrikeAndBall.js';
import getResultMessage from './getResultMessage.js';
import validateInput from './validateInput.js';

export default function BaseballGame() {
  const $result = document.getElementById('result');
  const $submit = document.getElementById('submit');
  const $userInput = document.getElementById('user-input');

  this.computerInputNumbers = null;
  this.userInputNumbers = null;

  this.init = () => {
    this.computerInputNumbers = createComputerInputNumbers();
    $result.innerHTML = '';
    attachSubmitEvent();
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    console.log(computerInputNumbers);
    console.log(userInputNumbers);
    return getResultMessage(countStrikeAndBall(computerInputNumbers, userInputNumbers));
  };

  const getUserInputNumbers = () => {
    const userInputString = $userInput.value;
    const userInputValidateMessage = validateInput(userInputString);
    if (userInputValidateMessage !== VALIDATE_MESSAGES.valid) {
      alert(userInputValidateMessage);
      return false;
    }

    return userInputString.split('').map((numberString) => Number(numberString));
  };

  const attachSubmitEvent = () => {
    $submit.addEventListener('click', (event) => {
      event.preventDefault();

      this.userInputNumbers = getUserInputNumbers();
      if (!this.userInputNumbers) {
        return;
      }

      const hint = this.play(this.computerInputNumbers, this.userInputNumbers);
      $result.innerText = hint;
    });
  };
}

const baseball = new BaseballGame();
baseball.init();
