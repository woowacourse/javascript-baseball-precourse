import {
  createRandomNumber,
  checkValidNumber,
  compareAnswersAndGetResult 
} from '/src/lib/gameFunctions.js';
import { correctAnswerMessage, getWrongAnswerMessage } from '/src/lib/messages.js';
import { printCorrectAnswerForTest } from '/src/lib/test.js';

const gameTurn = document.getElementById('app');
const userInput = gameTurn.querySelector('#user-input');
const userInputButton = gameTurn.querySelector('#submit');
const resultElement = gameTurn.querySelector('#result')

export default class BaseballGame {
  constructor() {
    this.answer = createRandomNumber();
    this.isFinished = false;
    this.result = null;
  }

  askRestart () {
    const askRestartSection = document.createElement("div");
    const restartButton = document.createElement('button');
    const restartQuestion = document.createElement('p');

    if(!this.result || !this.result.ok) return;
    
    askRestartSection.id = "ask-restart";
    restartButton.id = "restart-button";
    restartQuestion.id = "restart-question";

    restartQuestion.innerText = "게임을 새로 시작하시겠습니까?";
    restartButton.innerText = "restart";

    restartButton.addEventListener('click', () => window.location.reload());

    askRestartSection.appendChild(restartQuestion);
    askRestartSection.appendChild(restartButton);
    
    resultElement.appendChild(askRestartSection);
  }

  resetResultMessage () {
    const resultElementChildren = resultElement.childNodes;
    if(this.result && this.result.ok) return;
    resultElementChildren.forEach(resultElementChild => resultElement.removeChild(resultElementChild));
  }

  printResult(result) {
    const resultMessageElement = result.ok ? document.createElement('strong') : document.createElement('p');
    const message = result.ok ? correctAnswerMessage : getWrongAnswerMessage(result);
    
    this.resetResultMessage();
    this.isFinished = result.ok;
    resultMessageElement.innerText = message;
    resultElement.appendChild(resultMessageElement);

    if(this.result.ok) this.askRestart();
    else userInput.value = '';
  }

  play(computerInputNumbers, userInputNumbers) {
    const result = compareAnswersAndGetResult(computerInputNumbers, userInputNumbers);
    this.result = result;
    return this.printResult(result);
  }
}

let baseballGame = new BaseballGame();
printCorrectAnswerForTest(baseballGame.answer);

const playGame = e => {
  e.preventDefault();
  const checkUserInput = checkValidNumber(userInput.value);
  userInput.focus();
  if(baseballGame.isFinished) return alert('이미 정답을 맞히셨습니다!');

  checkUserInput.ok ? baseballGame.play(baseballGame.answer, userInput.value) : alert(checkUserInput.msg);
}

userInputButton.addEventListener('click', playGame);
userInput.addEventListener('keydown', e => {
  if(e.key === 'Enter') return baseballGame.isFinished ? window.location.reload() : playGame(e);
})