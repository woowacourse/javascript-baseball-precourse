import { BaseballGame } from './modules';
import { text } from './fixtrue';
const game = new BaseballGame();

function getDeduplicateCount(userInputNumbers) {
  return Array.from(new Set(userInputNumbers)).length;
}

function cleanResult() {
  const result_div = document.getElementById('result');

  while (result_div.hasChildNodes()) {
    result_div.removeChild(result_div.firstChild);
  }
}

function resetInputNumbers() {
  const userInput = document.getElementById('user-input');
  userInput.value = '';
}

function handleReStartClick() {
  cleanResult();
  resetInputNumbers();
  game.restart();
}

function renderResult(string) {
  const result_div = document.getElementById('result');

  const response_p = document.createElement('p');
  response_p.innerHTML = string;

  if (string === text.correct) {
    const strong = document.createElement('strong');
    strong.appendChild(response_p);
    result_div.appendChild(strong);

    const restart_div = document.createElement('div');
    restart_div.id = 'restart';

    let restart_p = document.createElement('p');
    restart_p.innerHTML = text.askRestart;
    restart_div.appendChild(restart_p);

    const restart_button = document.createElement('button');
    restart_button.innerHTML = text.restart;
    restart_button.id = 'game-restart-button';
    restart_button.addEventListener('click', handleReStartClick);
    restart_div.appendChild(restart_button);

    result_div.appendChild(restart_div);
  } else {
    result_div.appendChild(response_p);
  }
}

function isNumber(userInputNumbers) {
  const regex = /^[0-9]*$/;
  const response = regex.test(userInputNumbers);

  return response;
}

function isNot3Digit(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return true;
  }
}

function handleUserInputSubmit() {
  const userInputNumbers = document.getElementById('user-input').value;
  const deduplicateCount = getDeduplicateCount(userInputNumbers);

  if (!isNumber(userInputNumbers)) {
    resetInputNumbers();
    return alert(text.warningForNotNum);
  }

  if (isNot3Digit(userInputNumbers)) {
    resetInputNumbers();
    return alert(text.warningFor3Digit);
  }

  if (userInputNumbers.includes('0')) {
    resetInputNumbers();
    return alert(text.warningForZero);
  }

  if (deduplicateCount !== 3) {
    resetInputNumbers();
    return alert(text.warningForduplicate);
  }

  cleanResult();
  renderResult(game.play(game.getComputerInputNumbers(), userInputNumbers));
}

const submitNumButton = document.getElementById('submit');
submitNumButton.addEventListener('click', handleUserInputSubmit);
