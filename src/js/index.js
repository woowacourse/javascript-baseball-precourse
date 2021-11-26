import { $ } from './util/dom.js';
import { getUserInputNumbers } from './user.js';
import { getComputerInputNumbers } from './computer.js';
import { getResultString, getStrikeAndBall, renderResult } from './result.js';

export default function BaseballGame() {
  let computerInputNumbers = [];
  let userInputNumbers = [];

  this.play = function (computerInputNumbers, userInputNumbers) {
    const ballStrike = getStrikeAndBall(computerInputNumbers, userInputNumbers);
    const ball = ballStrike[0];
    const strike = ballStrike[1];
    console.log(computerInputNumbers, userInputNumbers);
    return getResultString(ball, strike);
  };
  this.init = () => {
    computerInputNumbers = getComputerInputNumbers();
    $('#user-input').value = '';
    $('#result').innerHTML = '';
    if ($('#game-restart-box') !== null) {
      console.log('work');
      $('#game-restart-box').remove();
      baseballGame = new BaseballGame();
    }
  };

  $('#base-ball-game-form').addEventListener('submit', function (e) {
    e.preventDefault();
    userInputNumbers = getUserInputNumbers(userInputNumbers);
    if (userInputNumbers !== undefined) {
      const result = baseballGame.play(computerInputNumbers, userInputNumbers);
      renderResult(result);
    }
  });
  $('#app').addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
      baseballGame.init();
    }
  });
}

let baseballGame = new BaseballGame();
baseballGame.init();
