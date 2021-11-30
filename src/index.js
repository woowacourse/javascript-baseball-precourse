import { $, getNumArr, resetOutput } from './utils/utils.js';
import getComputerInput from './getCoumputerInput.js';
import printError from './printError.js';
import getResult from './getResult.js';

export default function BaseballGame() {
  let computerInput = getComputerInput();

  this.play = (computerInputNumbers, userInputNumbers) => {
    // eslint-disable-next-line prettier/prettier
    if (!Array.isArray(computerInputNumbers) && !Array.isArray(userInputNumbers)) {
      computerInputNumbers = getNumArr(computerInputNumbers);
      userInputNumbers = getNumArr(userInputNumbers);
    }

    return getResult(computerInputNumbers, userInputNumbers);
  };

  const printResult = result => {
    if (result === '정답') {
      $('#result').innerHTML = `<strong>🎉 정답을 맞추셨습니다! 🎉</strong>
      <p id="restart">
        <span id="restart-message">게임을 새로 시작하시겠습니까?</span>
        <button id="game-restart-button">게임 재시작</button>
      </p>`;
      return;
    }
    $('#result').innerText = result;
  };

  const isVaildNum = () => {
    const userInputNumbers = getNumArr($('#user-input').value);
    // eslint-disable-next-line prettier/prettier
    if (userInputNumbers.includes(0) || userInputNumbers.includes(NaN) || userInputNumbers.length !== 3 || [...new Set(userInputNumbers)].length !== 3) {
      printError(userInputNumbers);
      resetOutput();
      return;
    }

    printResult(this.play(computerInput, userInputNumbers));
  };

  const restartGame = () => {
    computerInput = getComputerInput();
    resetOutput();
  };

  $('#input-form').addEventListener('submit', e => {
    e.preventDefault();
    isVaildNum();
  });

  $('#result').addEventListener('click', e => {
    if (e.target.id === 'game-restart-button') {
      restartGame();
    }
  });
}

const tmp = new BaseballGame();
console.log(tmp.play(123, 123));
