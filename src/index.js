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
    this.records = [];
  }

  showRecords() {
    const showRecordsSection = document.createElement("div");
    const tryCount = document.createElement("p");
    const showRecordsList = document.createElement("ol");
    const getUserRecordText = ({userInputNumbers, ball, strike}) => `your answer: ${userInputNumbers} ` + getWrongAnswerMessage({ball, strike});
    
    showRecordsSection.id = "show-records";
    tryCount.id = 'try-count';
    showRecordsList.id = 'show-records-list';

    tryCount.innerText = `시도 횟수: ${this.records.length}`;
    this.records.forEach((record, idx) => {
      const userRecord = document.createElement("li");
      
      userRecord.innerText = (idx < this.records.length-1) ? getUserRecordText(record) : '정답!!';
      showRecordsList.appendChild(userRecord);
    })

    showRecordsSection.appendChild(tryCount);
    showRecordsSection.appendChild(showRecordsList);
    resultElement.appendChild(showRecordsSection);
  }

  askRestart() {
    const askRestartSection = document.createElement("div");
    const restartButton = document.createElement('button');
    const askRestartPlaceholder = document.createElement('p');

    const askShowRecordsSection = document.createElement("div");
    const showRecordsButton = document.createElement('button');
    const askShowRecordsPlaceholder = document.createElement('p');
    

    if(!this.result || !this.result.ok) return;

    askRestartSection.style = "{flex-direction: row;}";
    
    askRestartSection.id = "ask-restart";
    restartButton.id = "restart-button";
    askRestartPlaceholder.id = "ask-restart-placeholder";

    askShowRecordsSection.id = 'ask-show-records';
    showRecordsButton.id = "show-records-button";
    askShowRecordsPlaceholder.id = "ask-show-records-placeholder";

    askRestartPlaceholder.innerText = "게임을 새로 시작하시겠습니까?";
    restartButton.innerText = "restart";

    askShowRecordsPlaceholder.innerText = "기록 보기";
    showRecordsButton.innerText = "show records";

    restartButton.addEventListener('click', () => window.location.reload());
    showRecordsButton.addEventListener('click', () => this.showRecords());

    askRestartSection.appendChild(askRestartPlaceholder);
    askRestartSection.appendChild(restartButton);

    askRestartSection.appendChild(askShowRecordsPlaceholder);
    askRestartSection.appendChild(showRecordsButton);
    
    resultElement.appendChild(askRestartSection);
    resultElement.appendChild(askShowRecordsSection);
  }

  resetResultMessage() {
    const resultElementChildren = resultElement.childNodes;
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
    const { strike, ball } = result;
    this.result = result;
    this.records.push({ userInputNumbers, strike, ball });
    return this.printResult(result);
  }
}

const startGame = () => {
  let baseballGame = new BaseballGame();
  const runGame = e => {
    e.preventDefault();
    const checkUserInput = checkValidNumber(userInput.value);
    userInput.focus();
    if(baseballGame.isFinished) return alert('이미 정답을 맞히셨습니다!');
  
    checkUserInput.ok ? baseballGame.play(baseballGame.answer, userInput.value) : alert(checkUserInput.msg);
  }

  printCorrectAnswerForTest(baseballGame.answer);

  userInputButton.addEventListener('click', runGame);
  userInput.addEventListener('keydown', e => {
    if(e.key === 'Enter') return baseballGame.isFinished ? window.location.reload() : runGame(e);
  });
}

startGame();