import countBallsAndStrikes from './utils/countBallsAndStrikes.js';
import generateAnswer from './utils/generateAnswer.js';
import userInputValidation from './utils/userInputValidation.js';

const $ = selector => document.querySelector(selector);

export default class BaseballGame {
  constructor() {
    this.answer = generateAnswer();
  }

  gameStart() {
    const handleSubmitUserInput = e => {
      e.preventDefault();
      const userInput = $('#user-input');
      let val = userInput.value.trim();
      const { isError, inValidText } = userInputValidation(val);

      if (isError) {
        alert(inValidText);
        userInput.value = '';
        return;
      }

      const result = this.play(this.answer, userInput.value);
      console.log('this.answer: ', this.answer);
      console.log('result: ', result);
    };
    const button = $('#submit');
    button.addEventListener('click', handleSubmitUserInput);
  }

  showBallsAndStrikes(computerInputNumbers, userInputNumbers) {
    const [balls, strikes] = countBallsAndStrikes(
      computerInputNumbers,
      userInputNumbers,
    );

    if (strikes === 3) {
      $('#result').innerHTML = `
        <h4>👍 정답을 맞추셨습니다. 게임을 새로 시작하시겠습니까?</h4>
        <button id="game-restart-button">재시작</button>
        `;

      const restartButton = $('#game-restart-button');

      restartButton.addEventListener('click', () => {
        $('#user-input').value = '';
        $('#result').innerHTML = '';
        this.answer = generateAnswer();
      });
      return '3스트라이크';
    }

    if (!strikes && !balls) {
      $('#result').innerText = '낫싱';
      return '낫싱';
    } else if (!strikes) {
      $('#result').innerText = `${balls}볼`;
      return `${balls}볼`;
    } else if (!balls) {
      $('#result').innerText = `${strikes}스트라이크`;
      return `${strikes}스트라이크`;
    } else {
      $('#result').innerText = `${balls}볼 ${strikes}스트라이크`;
      return `${balls}볼 ${strikes}스트라이크`;
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return this.showBallsAndStrikes(computerInputNumbers, userInputNumbers);
  }
}

const baseballGame = new BaseballGame();
baseballGame.gameStart();
