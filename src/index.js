import {
  compareInputNumbers,
  makeResultString,
  showResultString,
} from './play.js';
import { pickRandomNumbers, isValidInputNumbers } from './utils.js';

export default function BaseballGame() {
  let computerInputNumbers = pickRandomNumbers();

  const $userInput = document.getElementById('user-input');
  const $submitButton = document.getElementById('submit');
  const $resultDiv = document.getElementById('result');
  const $restartButton = document.createElement('button');

  this.play = function (computerInputNumbers, userInputNumbers) {
    const comparedResult = compareInputNumbers(
      computerInputNumbers,
      userInputNumbers
    );
    return makeResultString(comparedResult);
  };

  function createRestartButton() {
    $restartButton.innerHTML = '게임 재시작';
    $restartButton.id = 'game-restart-button';
    $resultDiv.appendChild($restartButton);
  }

  function handleInputNumbers(event) {
    event.preventDefault();
    const userInputNumbers = $userInput.value;
    if (!isValidInputNumbers(userInputNumbers)) {
      $userInput.value = '';
      return;
    }

    const resultString = this.play(computerInputNumbers, userInputNumbers);
    if (showResultString(resultString, $resultDiv)) {
      createRestartButton();
    }
  }

  function handleRestart() {
    computerInputNumbers = pickRandomNumbers();
    $resultDiv.innerHTML = '';
    $userInput.value = '';
  }

  $submitButton.addEventListener('click', handleInputNumbers.bind(this));
  $restartButton.addEventListener('click', handleRestart);
}

new BaseballGame();
