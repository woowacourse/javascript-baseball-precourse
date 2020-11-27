//test code
const printCorrectAnswerForTest = computerInputNumbers => console.log('hello world! correctAnswer is ', computerInputNumbers);

//variables
const correctAnswerMessage = "🎉정답을 맞추셨습니다!🎉";
const getWrongAnswerMessage = ({strike, ball}) => (!strike && !ball) ? '낫싱' : ((ball ? `${ball}볼 ` : '') + (strike ? `${strike}스트라이크` : ''));

//functions to execute baseball game
const checkValidNumber = inputs => {
  if(/[^1-9]+/g.test(inputs)) return {ok: false, msg: '1-9의 각 다른 숫자 3개를 공백 없이 입력하세요'};
  if(inputs.length !== 3) return {ok: false, msg: '숫자는 3개만 입력가능합니다.'};
  if(inputs.charAt(0) === inputs.charAt(1) || inputs.charAt(0) === inputs.charAt(2) || inputs.charAt(1) === inputs.charAt(2)) return {ok: false, msg: '같은 숫자는 여러번 올 수 없습니다.'};
  return {ok: true, msg: '올바른 입력입니다!'};
}

const createRandomNumber = () => {
  let randomNum = String(Math.floor(Math.random()*999 + 1));
  return checkValidNumber(randomNum).ok ? randomNum : createRandomNumber();
}

const compareAnswersAndgetResult = (computerInputNumbers, userInputNumbers) => {
  if(computerInputNumbers === userInputNumbers) return {ok: true};
  const computerInputNumbersArr = computerInputNumbers.split('');
  const userInputNumbersArr = userInputNumbers.split('');
  let strike = 0, ball = 0;

  //check answer
  for(let i=0; i<3; i++) {
    const index = computerInputNumbersArr.indexOf(userInputNumbersArr[i]);
    strike = index === i ? strike + 1 : strike;
    ball = index !== i && index !== -1 ? ball + 1 : ball;
  }

  return {
    ball,
    strike
  }
}

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
    const result = compareAnswersAndgetResult(computerInputNumbers, userInputNumbers);
    this.result = result;
    return this.printResult(result);
  }
}

let baseballGame = new BaseballGame();
printCorrectAnswerForTest(baseballGame.answer);

const playGame = e => {
  e.preventDefault();
  const checkUserInput = checkValidNumber(userInput.value);
  if(baseballGame.isFinished) return alert('이미 정답을 맞히셨습니다!');

  checkUserInput.ok ? baseballGame.play(baseballGame.answer, userInput.value) : alert(checkUserInput.msg);
  //console.log(baseballGame.result);
}

userInputButton.addEventListener('click', playGame);