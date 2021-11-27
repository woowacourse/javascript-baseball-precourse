import { VALIDATE_MESSAGES } from './constants.js';
import createComputerInputNumbers from './createComputerInputNumbers.js';
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
    return getResultMessage(computerInputNumbers, userInputNumbers);
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

      const resultMessage = this.play(this.computerInputNumbers, this.userInputNumbers);
      showResult(resultMessage);
    });
  };

  const showSuccess = () => {
    const message = document.createElement('span');
    message.appendChild(document.createTextNode('🎉정답을 맞추셨습니다!🎉'));
    message.appendChild(document.createElement('br'));

    const button = document.createElement('button');
    button.appendChild(document.createTextNode('게임 재시작'));
    button.setAttribute('id', 'game-restart-button');
    button.addEventListener('click', restart);

    $result.innerHTML = '';
    $result.appendChild(message);
    $result.appendChild(button);
  };

  const showHint = (hint) => {
    $result.innerText = hint;
  };

  const showResult = (resultMessage) => {
    if (resultMessage === '3스트라이크') {
      return showSuccess();
    }

    return showHint(resultMessage);
  };

  const restart = () => {
    this.computerInputNumbers = createComputerInputNumbers();
    $userInput.value = '';
    $result.innerHTML = '';
  };
}

const baseball = new BaseballGame();
baseball.init();
