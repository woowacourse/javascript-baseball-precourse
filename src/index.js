import countBallsAndStrikes from './utils/countBallsAndStrikes.js';
import { generateComputerAnswer } from './utils/generateComputerAnswer.js';
import { generateUserInput } from './utils/generateUserInput.js';
import { renderResult, showResultString } from './utils/result.js';
import { $ } from './utils/selector.js';

export default function BaseballGame() {
  let computerAnswer;
  let userInputNumbers;

  this.play = (computerInputNumbers, userInputNumbers) => {
    const [balls, strikes] = countBallsAndStrikes(
      computerInputNumbers,
      userInputNumbers,
    );
    return showResultString(balls, strikes);
  };

  this.init = () => {
    computerAnswer = generateComputerAnswer();
    $('#user-input').value = '';
    $('#result').innerHTML = '';
    if ($('#game-restart-button')) {
      $('#game-restart-button').remove();
      baseballGame = new BaseballGame();
    }
  };

  $('#submit').addEventListener('click', e => {
    e.preventDefault();
    userInputNumbers = generateUserInput();
    console.log('computerAnswer: ', computerAnswer);
    console.log('userInputNumbers: ', userInputNumbers);
    if (userInputNumbers) {
      const result = baseballGame.play(computerAnswer, userInputNumbers);
      renderResult(result);
    }
  });

  $('#app').addEventListener('click', e => {
    if (e.target.classList.contains('button')) {
      baseballGame.init();
    }
  });
}

const baseballGame = new BaseballGame();
baseballGame.init();

// 예시
console.log(baseballGame.play(123, 456)); // '낫싱'
console.log(baseballGame.play(123, 345)); // '1볼'
console.log(baseballGame.play(123, 432)); // '2볼'
console.log(baseballGame.play(123, 312)); // '3볼'
console.log(baseballGame.play(123, 145)); // '1스트라이크'
console.log(baseballGame.play(123, 134)); // '1볼 1스트라이크'
console.log(baseballGame.play(123, 132)); // '2볼 1스트라이크'
console.log(baseballGame.play(123, 124)); // '2스트라이크'
